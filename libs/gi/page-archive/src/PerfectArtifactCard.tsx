import { NextImage } from '@genshin-optimizer/common/ui'
import { artifactAsset, weaponAsset } from '@genshin-optimizer/gi/assets'
import type { WeaponKey } from '@genshin-optimizer/gi/consts'
import { i18n } from '@genshin-optimizer/gi/i18n'
import { SlotIcon } from '@genshin-optimizer/gi/svgicons'
import { LocationName } from '@genshin-optimizer/gi/ui'
import { Box, Chip, Tooltip, Typography } from '@mui/material'
import weapons from './weapons.json'

export interface PerfectArtifactSet {
  flower: string
  plume: string
  sands: string
  goblet: string
  circlet: string
  critUser: boolean
  character: string
  description: string
  setKey: string
  stars: string
  weapons: string[]
}

interface PerfectArtifactCardProps {
  perfect_set: PerfectArtifactSet
}
const slots = ['flower', 'plume', 'sands', 'goblet', 'circlet'] as const

export default function PerfectArtifactCard({
  perfect_set,
}: PerfectArtifactCardProps) {
  const setImagePath = artifactAsset(perfect_set.setKey, 'flower')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography variant="h6">
          <LocationName location={perfect_set.character} />
        </Typography>
        <Chip
          label="CRIT"
          color={perfect_set.critUser ? 'success' : 'error'}
          size="small"
          sx={{ fontWeight: 'bold' }}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          component={NextImage ? NextImage : 'img'}
          alt="Artifact set"
          src={setImagePath}
          sx={{ width: 48, height: 48 }}
        />
        <Box>
          <Typography variant="body2" color="text.secondary">
            {perfect_set.stars}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {perfect_set.description}
          </Typography>
        </Box>
      </Box>
      {/* Weapons Row */}
      {perfect_set.weapons && perfect_set.weapons.length > 0 && (
        <Box
          sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 1, mb: 2 }}
        >
          {perfect_set.weapons.map((weaponKey) => {
            const img = weaponAsset(weaponKey as WeaponKey, false)
            const name = i18n.t(`weaponNames_gen:${weaponKey}`)

            // Determine weapon category
            const getWeaponCategory = (key: string) => {
              if (weapons.event.includes(key as any))
                return { letter: 'E', label: 'Event', color: '#18484E' }
              if (weapons.battlepass.includes(key as any))
                return { letter: 'B', label: 'Battlepass', color: '#47430A' }
              if (weapons.starlight.includes(key as any))
                return { letter: 'S', label: 'Starlight', color: '#840D0B' }
              if (weapons.craftable.includes(key as any))
                return { letter: 'C', label: 'Craftable', color: '#004D00' }
              return { letter: 'P', label: 'Primogem', color: '#5411B0' }
            }
            const category = getWeaponCategory(weaponKey)

            return (
              <Tooltip
                key={weaponKey}
                title={
                  <Typography>
                    {name} ({category.label})
                  </Typography>
                }
                placement="top"
                arrow
              >
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                  <Box
                    component={NextImage ? NextImage : 'img'}
                    src={img ?? ''}
                    width="auto"
                    height={40}
                    sx={{ cursor: 'default' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -4,
                      right: -4,
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      bgcolor: category.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      color: 'white',
                      border: '1px solid white',
                    }}
                  >
                    {category.letter}
                  </Box>
                </Box>
              </Tooltip>
            )
          })}
        </Box>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {slots.map((slot) => (
          <Box
            key={slot}
            sx={{
              p: 0.75,
              borderRadius: 1,
              bgcolor: 'rgba(0,0,0,0.05)',
            }}
          >
            <Typography
              component="div"
              variant="body2"
              sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <SlotIcon iconProps={{ fontSize: 'inherit' }} slotKey={slot} />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <span
                  style={{
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    minWidth: '60px',
                  }}
                >
                  {slot}:
                </span>
              </Box>
              {perfect_set[slot]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
