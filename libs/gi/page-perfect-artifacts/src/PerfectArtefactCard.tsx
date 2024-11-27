import { NextImage } from '@genshin-optimizer/common/ui'
import { artifactAsset, characterAsset } from '@genshin-optimizer/gi/assets'
import { SlotIcon } from '@genshin-optimizer/gi/svgicons'
import { ArtifactSetSlotName } from '@genshin-optimizer/gi/ui'
import { Box, Button, CardContent, Chip, Typography } from '@mui/material'
import { useState } from 'react'

export default function PerfectArtefactCard({ match }) {
  const [currentPerfectIndex, setCurrentPerfectIndex] = useState(0)
  const currentPerfectMatch = match.perfectMatches[currentPerfectIndex]

  const artifact = currentPerfectMatch.perfect_artefact
  const setImagePath = artifactAsset(artifact.setKey, 'flower')
  const characterImagePath = characterAsset(artifact.character, 'icon')

  const slotName = (
    <ArtifactSetSlotName
      setKey={match.test_artefact.setKey}
      slotKey={match.test_artefact.slotKey}
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component={NextImage ? NextImage : 'img'}
              alt="Character Side Image"
              src={characterImagePath}
              sx={{ width: 32, height: 32 }}
            />
            <Typography variant="h6">{artifact.character}</Typography>
          </Box>
          {match.perfectMatches.length > 1 && (
            <Box sx={{ display: 'flex', gap: 0.5, marginLeft: 'auto' }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() =>
                  setCurrentPerfectIndex(
                    (prev) => (prev + 1) % match.perfectMatches.length
                  )
                }
              >
                Other Users ({currentPerfectIndex + 1}/
                {match.perfectMatches.length})
              </Button>
            </Box>
          )}
          <Box sx={{ display: 'flex', gap: 0.5, marginLeft: 'auto' }}>
            {currentPerfectMatch.match !== undefined && (
              <Chip
                label={`Match: ${currentPerfectMatch.match}/4`}
                color="primary"
                size="small"
                sx={{ fontWeight: 'bold' }}
              />
            )}
            <Chip
              label="CRIT"
              color={artifact.critUser ? 'success' : 'error'}
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
            {artifact.description}
          </Typography>
        </Box>
      </Box>

      {/* Artifact Stats with styled boxes */}
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
                color:
                  piece === match.test_artefact.slotKey ? '#DE79F0' : 'inherit',
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
                      piece === match.test_artefact.slotKey
                        ? '#DE79F0'
                        : 'inherit',
                  }}
                >
                  {piece}:
                </span>
                <span
                  style={{
                    color:
                      piece === match.test_artefact.slotKey
                        ? '#DE79F0'
                        : 'inherit',
                  }}
                >
                  {artifact[piece]}
                </span>
              </Box>
            </Typography>
          </Box>
        ))}
      </Box>
    </CardContent>
  )
}
