import { NextImage } from '@genshin-optimizer/common/ui'
import { artifactAsset, characterAsset } from '@genshin-optimizer/gi/assets'
import { Box, CardContent, Chip, Typography } from '@mui/material'
import perfect_artifacts from './artefacts.json'

export default function PerfectArtefactCard({
  id,
  matchCount,
}: {
  id: number
  matchCount?: number
}) {
  const artifact = perfect_artifacts[id]
  const setImagePath = artifactAsset(artifact.setKey, 'flower')
  const characterKey = artifact.character as CharacterKey
  const characterImagePath = characterAsset(artifact.character, 'icon')

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
          {matchCount !== undefined && (
            <Chip
              label={`Match: ${matchCount}/4`}
              color="primary"
              size="small"
              sx={{ fontWeight: 'bold' }}
            />
          )}
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
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {artifact.setKey}
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
            <Typography variant="subtitle2" sx={{ display: 'flex', gap: 1 }}>
              <span
                style={{
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  minWidth: '60px',
                }}
              >
                {piece}:
              </span>
              <span>{artifact[piece]}</span>
            </Typography>
          </Box>
        ))}
      </Box>
    </CardContent>
  )
}
