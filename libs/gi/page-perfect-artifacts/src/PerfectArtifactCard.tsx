import { NextImage } from '@genshin-optimizer/common/ui'
import { artifactAsset } from '@genshin-optimizer/gi/assets'
import { SlotIcon } from '@genshin-optimizer/gi/svgicons'
import { ArtifactSetSlotName, LocationName } from '@genshin-optimizer/gi/ui'
import { Box, Button, CardContent, Chip, Typography } from '@mui/material'
import { useState } from 'react'
import { Artifact, PerfectArtifactSet } from './TestPerfectArtifacts'

interface PerfectArtifactCardProps {
  test_artifact: Artifact
  perfect_sets: PerfectArtifactSet[]
}

export default function PerfectartifactCard({
  test_artifact,
  perfect_sets,
}: PerfectArtifactCardProps) {
  const perfect_artifacts: PerfectArtifactSet[] = perfect_sets

  const [currentPerfectIndex, setCurrentPerfectIndex] = useState(0)
  const currentPerfectMatch: PerfectArtifactSet =
    perfect_artifacts[currentPerfectIndex]

  // console.log(currentPerfectMatch.character)

  const setImagePath = artifactAsset(currentPerfectMatch.setKey, 'flower')

  const slotName = (
    <ArtifactSetSlotName
      setKey={test_artifact.setKey}
      slotKey={test_artifact.slotKey}
    />
  )

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
            {<LocationName location={currentPerfectMatch.character} />}
          </Typography>
          {perfect_artifacts.length > 1 && (
            <Box sx={{ display: 'flex', gap: 0.5, marginLeft: 'auto' }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() =>
                  setCurrentPerfectIndex(
                    (prev) => (prev + 1) % perfect_artifacts.length
                  )
                }
              >
                Other Users ({currentPerfectIndex + 1}/
                {perfect_artifacts.length})
              </Button>
            </Box>
          )}
          <Box sx={{ display: 'flex', gap: 0.5, marginLeft: 'auto' }}>
            {currentPerfectMatch.matches !== undefined && (
              <Chip
                label={`Match: ${currentPerfectMatch.matches}/4`}
                color="primary"
                size="small"
                sx={{ fontWeight: 'bold' }}
              />
            )}
            <Chip
              label="CRIT"
              color={currentPerfectMatch.critUser ? 'success' : 'error'}
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
            <strong> {slotName}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currentPerfectMatch.description}
          </Typography>
        </Box>
      </Box>

      {/* test_artifact Stats with styled boxes */}
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
                color: piece === test_artifact.slotKey ? '#DE79F0' : 'inherit',
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
                      piece === test_artifact.slotKey ? '#DE79F0' : 'inherit',
                  }}
                >
                  {piece}:
                </span>
                <span
                  style={{
                    color:
                      piece === test_artifact.slotKey ? '#DE79F0' : 'inherit',
                  }}
                >
                  {currentPerfectMatch[piece].split('+').map((part, index) =>
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
