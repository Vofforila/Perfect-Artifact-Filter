import { CardThemed } from '@genshin-optimizer/common/ui'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import InfoIcon from '@mui/icons-material/Info'
import ScienceIcon from '@mui/icons-material/Science'
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material'
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

export function BuildCard({
  avatar,
  name,
  description,
  active = false,
  onActive,
  children,
  onEdit,
  onCopyToTc,
  onDupe,
  onEquip,
  onRemove,
  hideFooter = false,
}: {
  avatar?: ReactNode
  name: ReactNode
  description?: ReactNode
  active?: boolean
  onActive?: () => void
  children: ReactNode
  onEdit?: () => void
  onCopyToTc?: () => void
  onDupe?: () => void
  onEquip?: () => void
  onRemove?: () => void
  hideFooter?: boolean
}) {
  const { t } = useTranslation('build')
  const clickableAreaContent = (
    <Box>
      <CardHeader
        avatar={avatar}
        title={
          <Typography noWrap gutterBottom variant="h6">
            {name}
          </Typography>
        }
        action={
          description && (
            <Tooltip title={<Typography>{description}</Typography>}>
              <InfoIcon />
            </Tooltip>
          )
        }
      />
      <CardContent sx={{ pt: 0, pb: 1 }}>{children}</CardContent>
    </Box>
  )
  return (
    <CardThemed
      bgt="light"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: active ? '0px 0px 0px 2px green inset' : undefined,
      }}
    >
      {onActive ? (
        <Button
          color="neutral300"
          onClick={onActive}
          variant="outlined"
          sx={{ p: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        >
          {clickableAreaContent}
        </Button>
      ) : (
        clickableAreaContent
      )}
      {!hideFooter && (
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: 'auto',
          }}
        >
          <Tooltip
            title={<Typography>{t('buildCardTip.edit')}</Typography>}
            placement="top"
            arrow
          >
            <Box>
              <IconButton
                color="info"
                size="small"
                onClick={onEdit}
                disabled={!onEdit}
              >
                <span>
                  <EditIcon />
                </span>
              </IconButton>
            </Box>
          </Tooltip>
          <Tooltip
            title={<Typography>{t('buildCardTip.copyTc')}</Typography>}
            placement="top"
            arrow
          >
            <Box>
              <IconButton
                color="info"
                size="small"
                onClick={onCopyToTc}
                disabled={!onCopyToTc}
              >
                <ScienceIcon />
              </IconButton>
            </Box>
          </Tooltip>
          <Tooltip
            title={<Typography>{t('buildCardTip.duplicate')}</Typography>}
            placement="top"
            arrow
          >
            <Box>
              <IconButton
                color="info"
                size="small"
                onClick={onDupe}
                disabled={!onDupe}
              >
                <ContentCopyIcon />
              </IconButton>
            </Box>
          </Tooltip>
          <Tooltip
            title={<Typography>{t('buildCardTip.equip')}</Typography>}
            placement="top"
            arrow
          >
            <Box>
              <IconButton
                color="info"
                size="small"
                onClick={onEquip}
                disabled={!onEquip}
              >
                <CheckroomIcon />
              </IconButton>
            </Box>
          </Tooltip>
          <Tooltip
            title={<Typography>{t('buildCardTip.delete')}</Typography>}
            placement="top"
            arrow
          >
            <Box>
              <IconButton
                color="error"
                size="small"
                onClick={onRemove}
                disabled={!onRemove}
              >
                <DeleteForeverIcon />
              </IconButton>
            </Box>
          </Tooltip>
        </CardActions>
      )}
    </CardThemed>
  )
}
