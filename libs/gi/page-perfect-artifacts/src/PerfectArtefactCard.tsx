import { NextImage } from '@genshin-optimizer/common/ui'
import { artifactAsset } from '@genshin-optimizer/gi/assets'
import { Box, CardContent, Typography } from '@mui/material'
import perfect_artifacts from './artefacts.json'

export default function PerfectArtefactCard({ id }: { id: number }) {
  const artifact = perfect_artifacts[id]
  const setImagePath = artifactAsset(artifact.setKey, 'flower') // This will get the correct image path for the set

  return (
    <CardContent
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        pt: 1,
        pb: '0!important',
        width: '100%',
      }}
    >
      {/* Character Name */}
      <Typography variant="h6" sx={{ mb: 1 }}>
        {artifact.character}
      </Typography>

      {/* Set Info with Image */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          component={NextImage ? NextImage : 'img'}
          alt="Set Image"
          src={setImagePath}
          sx={{ width: 40, height: 40, mr: 1 }}
        />
        <Box>
          <Typography variant="subtitle1">{artifact.setKey}</Typography>
          <Typography variant="body2" color="text.secondary">
            {artifact.description}
          </Typography>
        </Box>
      </Box>

      {/* Artifact Stats */}
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Flower: {artifact.flower}
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Plume: {artifact.plume}
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Sands: {artifact.sands}
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Goblet: {artifact.goblet}
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Circlet: {artifact.circlet}
      </Typography>
    </CardContent>
  )
}
