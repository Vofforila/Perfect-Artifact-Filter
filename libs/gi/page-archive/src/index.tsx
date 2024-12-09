import { useDataEntryBase } from '@genshin-optimizer/common/database-ui'
import { CardThemed } from '@genshin-optimizer/common/ui'
import type { SortConfigs } from '@genshin-optimizer/common/util'
import { sortFunction } from '@genshin-optimizer/common/util'
import type { CharacterKey } from '@genshin-optimizer/gi/consts'
import { allCharacterKeys } from '@genshin-optimizer/gi/consts'
import { useDatabase } from '@genshin-optimizer/gi/db-ui'
import { i18n } from '@genshin-optimizer/gi/i18n'
import { getCharEle, getCharStat } from '@genshin-optimizer/gi/stats'
import { LocationName, SillyContext } from '@genshin-optimizer/gi/ui'
import {
  Box,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { useContext, useDeferredValue, useMemo, useState } from 'react'
import perfect_sets from './artifacts.json'
import PerfectartifactCard from './PerfectArtifactCard'
import type { PerfectArtifactSet } from './TestPerfectArtifacts'

const rarties = [5, 4] as const
export default function PageArchive() {
  const { silly } = useContext(SillyContext)
  const database = useDatabase()
  const archive = useDataEntryBase(database.displayArchive)
  const [searchTerm, setSearchTerm] = useState('')
  const searchTermDeferred = useDeferredValue(searchTerm)

  const { character } = archive

  const charKeys = useMemo(() => {
    return allCharacterKeys.filter((cKey) => {
      const { rarity, weaponType } = getCharStat(cKey)
      if (!character.rarity.includes(rarity as (typeof rarties)[number]))
        return false
      if (!character.weaponType.includes(weaponType)) return false

      const nameStr = i18n.t(`charNames_gen:${cKey}`)
      const sillyStr =
        silly && i18n.exists(`sillyWisher_charNames:${cKey}`)
          ? i18n.t(`sillyWisher_charNames:${cKey}`)
          : ''
      if (
        searchTermDeferred &&
        !nameStr
          .toLocaleLowerCase()
          .includes(searchTermDeferred.toLocaleLowerCase()) &&
        !sillyStr
          .toLocaleLowerCase()
          .includes(searchTermDeferred.toLocaleLowerCase())
      )
        return false
      return true
    })
  }, [character, searchTermDeferred, silly])

  type SortKey = 'name' | 'rarity' | 'element' | 'type'
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
  const charKeysToShow = useMemo(() => charKeys.sort(sortedCharKeys))

  const [characterFilter, setCharacterFilter] = useState<string>('')

  return (
    <CardThemed>
      <CardContent>
        <FormControl fullWidth>
          <InputLabel>Character</InputLabel>
          <Select
            value={characterFilter}
            onChange={(e) => setCharacterFilter(e.target.value)}
            label="Character"
          >
            <MenuItem value="">None</MenuItem>
            {charKeysToShow.map((character) => (
              <MenuItem key={character} value={character}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationName location={character} />
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Grid container spacing={2}>
          {(perfect_sets as PerfectArtifactSet[])
            .filter((perfect_set) => {
              if (characterFilter === '') return true
              return perfect_set.character === characterFilter
            })
            .map((perfect_set, index) => {
              return (
                <Grid item xs={6} key={index}>
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
