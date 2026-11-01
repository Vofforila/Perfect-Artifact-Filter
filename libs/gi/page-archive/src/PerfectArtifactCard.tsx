import { NextImage } from '@genshin-optimizer/common/ui'
import { artifactAsset } from '@genshin-optimizer/gi/assets'
import { SlotIcon } from '@genshin-optimizer/gi/svgicons'
import { LocationName } from '@genshin-optimizer/gi/ui'
import { Box, Chip, Typography } from '@mui/material'

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
