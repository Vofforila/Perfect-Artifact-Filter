import perfect_sets from './artifacts.json'

export class PerfectStats {
  mainStats: string[]
  secondaryStats: string[]
  checkMainStat: boolean
  crit_mainstat: boolean
  constructor(
    mainStats: string | string[],
    secondaryStats: string[],
    checkMainStat: boolean,
    crit_mainstat = false
  ) {
    this.mainStats = Array.isArray(mainStats) ? mainStats : [mainStats]
    this.secondaryStats = secondaryStats
    this.checkMainStat = checkMainStat
    this.crit_mainstat = crit_mainstat
  }
}

export class PerfectMatch {
  perfect_sets: PerfectArtifactSet[]
  test_artifact: Artifact
  constructor(perfect_sets: PerfectArtifactSet[], test_artifact: Artifact) {
    this.perfect_sets = perfect_sets
    this.test_artifact = test_artifact
  }
}

export class PerfectArtifactSet {
  flower: string
  plume: string
  sands: string
  goblet: string
  circlet: string
  critUser: boolean
  character: string
  description: string
  setKey: string
  set_image: string
  matches: number
  constructor(
    flower: string,
    plume: string,
    sands: string,
    goblet: string,
    circlet: string,
    critUser: boolean,
    character: string,
    description: string,
    setKey: string,
    set_image: string,
    matches: number
  ) {
    this.flower = flower
    this.plume = plume
    this.sands = sands
    this.goblet = goblet
    this.circlet = circlet
    this.critUser = critUser
    this.character = character
    this.description = description
    this.setKey = setKey
    this.set_image = set_image
    this.matches = matches
  }
}

export class Artifact {
  id: string
  setKey: string
  location: string
  slotKey: string
  lock: boolean
  mainStatKey: string
  rarity: number
  level: number
  substats: {
    key: string
    value: number
    rolls: number[]
    efficiency: number
    accurateValue: number
  }[]
  mainStatVal: number

  constructor(
    id: string,
    setKey: string,
    location: string,
    slotKey: string,
    lock: boolean,
    mainStatKey: string,
    rarity: number,
    level: number,
    substats: {
      key: string
      value: number
      rolls: number[]
      efficiency: number
      accurateValue: number
    }[],
    mainStatVal: number
  ) {
    this.id = id
    this.setKey = setKey
    this.location = location
    this.slotKey = slotKey
    this.lock = lock
    this.mainStatKey = mainStatKey
    this.rarity = rarity
    this.level = level
    this.substats = substats
    this.mainStatVal = mainStatVal
  }
}

export default function TestArtifacts(_allArtifacts: Artifact[]) {
  const artifact_matches: PerfectMatch[] = []
  for (const test_artifact of _allArtifacts as Artifact[]) {
    const perfectMatch: PerfectMatch = new PerfectMatch([], test_artifact)
    for (const perfect_artifact of perfect_sets as PerfectArtifactSet[]) {
      if (
        test_artifact.setKey === perfect_artifact.setKey ||
        test_artifact.slotKey === 'goblet'
      ) {
        const perfect_stats: PerfectStats = CheckMainStat(
          perfect_artifact,
          test_artifact
        )

        if (perfect_stats.checkMainStat) {
          const result = CheckSubStats(
            perfect_stats,
            test_artifact,
            perfect_artifact
          )
          if (result) {
            perfectMatch.perfect_sets.push(result)
          }
        }
      }
    }
    if (perfectMatch.perfect_sets.length > 0) {
      artifact_matches.push(perfectMatch)
    }
  }
  return artifact_matches
}

function CheckMainStat(
  _perfect_artifact: PerfectArtifactSet,
  _test_artifact: Artifact
) {
  const type = _test_artifact.slotKey

  const perfect_stats: PerfectStats = SubstatParserforPerfectArtifact(
    _perfect_artifact,
    type
  )

  if (type !== 'flower' && type !== 'plume') {
    const test_mainstat_type = _test_artifact.mainStatKey
    for (let index = 0; index < perfect_stats.mainStats.length; index++) {
      if (perfect_stats.mainStats[index] === test_mainstat_type) {
        if (test_mainstat_type === 'critDMG_') {
          perfect_stats.crit_mainstat = true
        }
        perfect_stats.checkMainStat = true
        break
      }
    }
  } else {
    perfect_stats.checkMainStat = true
  }
  return perfect_stats
}

function SubstatParser(mainStatKey: any) {
  let substat_type
  switch (mainStatKey.key) {
    case 'atk':
      substat_type = 'ATK'
      break
    case 'atk_':
      substat_type = 'ATK'
      break
    case 'hp':
      substat_type = 'HP'
      break
    case 'hp_':
      substat_type = 'HP'
      break
    case 'enerRech_':
      substat_type = 'ER'
      break
    case 'eleMas':
      substat_type = 'EM'
      break
    case 'def':
      substat_type = 'DEF'
      break
    case 'def_':
      substat_type = 'DEF'
      break
    case 'critDMG_':
      substat_type = 'CRIT'
      break
    case 'critRate_':
      substat_type = 'CRIT'
      break
    case 'heal_':
      substat_type = 'HEAL'
      break
    case 'hydro_dmg_':
      substat_type = 'HYDRO'
      break
    case 'electro_dmg_':
      substat_type = 'ELECTRO'
      break
    case 'anemo_dmg_':
      substat_type = 'ANEMO'
      break
    case 'dendro_dmg_':
      substat_type = 'DENDRO'
      break
    case 'cryo_dmg_':
      substat_type = 'CRYO'
      break
    case 'pyro_dmg_':
      substat_type = 'PYRO'
      break
    case 'geo_dmg_':
      substat_type = 'GEO'
      break
    case 'physical_dmg_':
      substat_type = 'PHYSICAL'
      break
  }
  return substat_type
}

function CheckSubStats(
  _perfect_stats: PerfectStats,
  _test_artifact: Artifact,
  _perfect_artifact: PerfectArtifactSet
) {
  let matches = 0
  let critMatch = 0
  let checkvalue = 0

  if (_perfect_stats.secondaryStats.length - 1 <= 3) {
    checkvalue = _perfect_stats.secondaryStats.length
  }
  if (
    _test_artifact.substats[3].value === 0 &&
    _perfect_stats.secondaryStats.length - 1 >= 3
  ) {
    checkvalue = 3
  } else if (
    _test_artifact.substats[3].value !== 0 &&
    _perfect_stats.secondaryStats.length - 1 > 3
  ) {
    checkvalue = 4
  }

  _test_artifact.substats.forEach((substat: any) => {
    const substat_type = substat.key
    for (let index = 0; index < _perfect_stats.secondaryStats.length; index++) {
      const perfect_substat = _perfect_stats.secondaryStats[index]
      if (perfect_substat === substat_type) {
        if (
          _perfect_artifact.critUser &&
          ('critDMG_' === substat_type || 'critRate_' === substat_type)
        ) {
          critMatch++
        }
        matches++
        break
      }
    }
  })

  // console.log(_perfect_artifact.character)
  // console.log(_perfect_stats)
  // console.log(_test_artifact)
  // console.log(_perfect_artifact)
  // console.log(critMatch)
  // console.log(matches)

  if (
    (_perfect_artifact.critUser &&
      (critMatch === 2 ||
        (_test_artifact.substats[3].value === 0 && critMatch === 1))) ||
    (_perfect_stats.crit_mainstat === true &&
      (critMatch === 1 || _test_artifact.substats[3].value === 0)) ||
    (_perfect_artifact.critUser === false && matches >= checkvalue)
  ) {
    _perfect_artifact.matches = matches
    return _perfect_artifact
  }

  return false
}

function SubstatParserforPerfectArtifact(
  _perfect_artifact: PerfectArtifactSet,
  type: string
) {
  if (_perfect_artifact[type].includes('/')) {
    const secondaryStats = _perfect_artifact[type].split(' + ')
    const mainStats = secondaryStats[0].split('/')
    return new PerfectStats(mainStats, secondaryStats.slice(1), false)
  } else {
    const secondaryStats = _perfect_artifact[type].split(' + ')
    const mainStats = secondaryStats[0]
    return new PerfectStats(mainStats, secondaryStats.slice(1), false)
  }
}
