import { NextImage } from '@genshin-optimizer/common/ui'
import { artifactAsset, weaponAsset } from '@genshin-optimizer/gi/assets'
import { WeaponKey } from '@genshin-optimizer/gi/consts'
import { i18n } from '@genshin-optimizer/gi/i18n'
import { SlotIcon } from '@genshin-optimizer/gi/svgicons'
import { LocationName } from '@genshin-optimizer/gi/ui'
import { Box, CardContent, Chip, Tooltip, Typography } from '@mui/material'
import { PerfectArtifactSet } from './TestPerfectArtifacts'

interface PerfectArtifactCardProps {
  perfect_set: PerfectArtifactSet
}

export default function PerfectartifactCard({
  perfect_set,
}: PerfectArtifactCardProps) {
  // console.log(perfect_set.character)
  const setImagePath = artifactAsset(perfect_set.setKey, 'flower')

  return (
    <CardContent
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        pt: 1,
        pb: '0!important',
        width: '100%',
        minHeight: '367px',
      }}
    >
      <Box sx={{ position: 'relative', mb: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6">
            {<LocationName location={perfect_set.character} />}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5, marginLeft: 'auto' }}>
            {perfect_set.matches !== undefined && (
              <Chip
                label={`Match: ${perfect_set.matches}/4`}
                color="primary"
                size="small"
                sx={{ fontWeight: 'bold' }}
              />
            )}
            <Chip
              label="CRIT"
              color={perfect_set.critUser ? 'success' : 'error'}
              size="small"
              sx={{ fontWeight: 'bold' }}
            />
          </Box>
        </Box>
      </Box>
      {/* Set Info with Image */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          bgcolor: 'rgba(0,0,0,0.1)',
          p: 1,
          borderRadius: 1,
        }}
      >
        <Box
          component={NextImage ? NextImage : 'img'}
          alt="Set Image"
          src={setImagePath}
          sx={{ width: 48, height: 48, mr: 2 }}
        />
        <Box>
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}
          >
            <strong>
              {perfect_set.setKey.replace(/([a-z])([A-Z])/g, '$1 $2')}
            </strong>
          </Typography>
        </Box>
      </Box>
      {/* Weapons Row */}
      {perfect_set.weapons && perfect_set.weapons.length > 0 && (
        <Box
          sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 1, mb: 2 }}
        >
          {perfect_set.weapons.map((weaponKey) => {
            const img = weaponAsset(weaponKey as WeaponKey, true)
            const name = i18n.t(`weaponNames_gen:${weaponKey}`)
            return (
              <Tooltip
                key={weaponKey}
                title={<Typography>{name}</Typography>}
                placement="top"
                arrow
              >
                <Box
                  component={NextImage ? NextImage : 'img'}
                  src={img ?? ''}
                  width="auto"
                  height={40}
                  sx={{ cursor: 'default' }}
                />
              </Tooltip>
            )
          })}
        </Box>
      )}
      {/* perfect_set Stats with styled boxes */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {['flower', 'plume', 'sands', 'goblet', 'circlet'].map((piece) => (
          <Box
            key={piece}
            sx={{
              p: 0.75,
              borderRadius: 1,
              bgcolor: 'rgba(0,0,0,0.05)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.1)' },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: piece === perfect_set.slotKey ? '#DE79F0' : 'inherit',
              }}
            >
              <SlotIcon iconProps={{ fontSize: 'inherit' }} slotKey={piece} />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <span
                  style={{
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    minWidth: '60px',
                    color:
                      piece === perfect_set.slotKey ? '#DE79F0' : 'inherit',
                  }}
                >
                  {piece}:
                </span>
                <span
                  style={{
                    color:
                      piece === perfect_set.slotKey ? '#DE79F0' : 'inherit',
                  }}
                >
                  {perfect_set[piece].split('+').map((part, index) =>
                    index === 0 ? (
                      <span key={index} style={{ color: '#FFA500' }}>
                        {part}
                      </span>
                    ) : (
                      <span key={index}>+{part}</span>
                    )
                  )}
                </span>
              </Box>
            </Typography>
          </Box>
        ))}
      </Box>
    </CardContent>
  )
}
