import { AnvilIcon } from '@genshin-optimizer/common/svgicons'
import { CardThemed } from '@genshin-optimizer/common/ui'
import { FlowerIcon } from '@genshin-optimizer/gi/svgicons'
import { People } from '@mui/icons-material'
import { Box, CardContent, Grid, Tab } from '@mui/material'
import type { ReactElement } from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useMatch } from 'react-router-dom'
import perfect_sets from './artifacts.json'
import PerfectartifactCard from './PerfectArtifactCard'
import { PerfectArtifactSet } from './TestPerfectArtifacts'
import type {
  CharacterKey,
} from '@genshin-optimizer/gi/consts'
import {
  CharacterName,
  SillyContext,
  iconAsset,
} from '@genshin-optimizer/gi/ui'
import { sortFunction } from '@genshin-optimizer/common/util'
import { i18n } from '@genshin-optimizer/gi/i18n'




type Tab = {
  i18Key: string
  icon: ReactElement
  value: string
  to: string
}
const artifacts: Tab = {
  i18Key: 'tabs.artifacts',
  icon: <FlowerIcon />,
  value: 'artifacts',
  to: '/artifacts',
}
const weapons: Tab = {
  i18Key: 'tabs.weapons',
  icon: <AnvilIcon />,
  value: 'weapons',
  to: '/weapons',
}

const characters: Tab = {
  i18Key: 'tabs.characters',
  icon: <People />,
  value: 'characters',
  to: '/characters',
}

const tabs = [artifacts, weapons, characters] as const
const tabValues = tabs.map(({ value }) => value)

const sortedCharKeys = useMemo(
  () =>
    sortFunction([character.sortOrderBy], character.sortOrder === 'asc', {
      name: (cKey: CharacterKey) =>
        silly && i18n.exists(`sillyWisher_charNames:${cKey}`)
          ? i18n.t(`sillyWisher_charNames:${cKey}`)
          : i18n.t(`charNames_gen:${cKey}`),
      rarity: (cKey: CharacterKey) => getCharStat(cKey).rarity,
      element: (cKey: CharacterKey) => getCharEle(cKey),
      type: (cKey: CharacterKey) => getCharStat(cKey).weaponType,
    } as SortConfigs<SortKey, CharacterKey>),
  [character.sortOrder, character.sortOrderBy, silly]
)


export default function PageArchive() {
  const { t } = useTranslation('ui')

  const {
    params: { tab: tabRaw },
  } = useMatch({ path: '/archive/:tab', end: false }) ?? {
    params: {},
  }
  const tab = useMemo(() => {
    const tab = tabValues.find((tv) => tv === tabRaw)
    return tab ?? 'artifacts'
  }, [tabRaw])

  return (
    <CardThemed>
      <CardContent>

 {/* Dropdown to select character, populated from CharacterKeys array */}
 {/* <select onChange={(e) => setCharacterFilter(e.target.value)} value={characterFilter}>
        {CharacterKeys.map((character) => (
          <option key={character} value={character}>
            {character}
          </option>
        ))}
      </select> */}
  <CharacterName characterKey={cKey} gender={gender} />

        <Grid container spacing={2}>
          {(perfect_sets as PerfectArtifactSet[]).map((perfect_set) => {
            let character = perfect_set.character
            return (
              <Grid item xs={6}>
                <CardThemed>
                  <CardContent>
                    <Box sx={{ position: 'relative' }}>
                      <PerfectartifactCard perfect_set={perfect_set} />
                    </Box>
                  </CardContent>
                </CardThemed>
              </Grid>
            )
          })}
        </Grid>
      </CardContent>
    </CardThemed>
  )
}
