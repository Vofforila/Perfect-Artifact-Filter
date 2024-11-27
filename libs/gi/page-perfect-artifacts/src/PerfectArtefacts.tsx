import perfect_artefacts from './artefacts.json'

export default function testArtefact(_allArtifacts) {
  const matches = []
  for (const test_artefact of _allArtifacts) {
    const perfectMatches = [];
    for (const perfect_artefact of perfect_artefacts) {
      if (test_artefact.setKey === perfect_artefact.setKey) {
        const type = test_artefact.slotKey
        let doubleMainstat
        let perfect_substat_types

        if (perfect_artefact[type].includes('/')) {
          doubleMainstat = 1
          const splitStats = perfect_artefact[type].split(' + ')
          const mainStats = splitStats[0].split('/')
          perfect_substat_types = [...mainStats, ...splitStats.slice(1)]
        } else {
          doubleMainstat = 0
          perfect_substat_types = perfect_artefact[type].split(' + ')
        }

        // console.log(test_artefact)

        let test_mainstat_type
        let match = 0
        let critMatch = 0

        switch (test_artefact.mainStatKey) {
          case 'atk':
            test_mainstat_type = 'ATK'
            break
          case 'atk_':
            test_mainstat_type = 'ATK'
            break
          case 'hp':
            test_mainstat_type = 'HP'
            break
          case 'hp_':
            test_mainstat_type = 'HP'
            break
          case 'enerRech_':
            test_mainstat_type = 'ER'
            break
          case 'eleMas':
            test_mainstat_type = 'EM'
            break
          case 'def':
            test_mainstat_type = 'DEF'
            break
          case 'def_':
            test_mainstat_type = 'DEF'
            break
          case 'critDMG_':
            test_mainstat_type = 'CRIT'
            break
          case 'critRate_':
            test_mainstat_type = 'CRIT'
            break
          case 'heal_':
            test_mainstat_type = 'HEAL'
            break
          case 'hydro_dmg_':
            test_mainstat_type = 'HYDRO'
            break
          case 'electro_dmg_':
            test_mainstat_type = 'ELECTRO'
            break
          case 'anemo_dmg_':
            test_mainstat_type = 'ANEMO'
            break
          case 'dendro_dmg_':
            test_mainstat_type = 'DENDRO'
            break
          case 'cryo_dmg_':
            test_mainstat_type = 'CRYO'
            break
          case 'pyro_dmg_':
            test_mainstat_type = 'PYRO'
            break
          case 'geo_dmg_':
            test_mainstat_type = 'GEO'
            break
        }

        let checkMainstat
        if (
          doubleMainstat === 1 &&
          (perfect_substat_types[0] === test_mainstat_type ||
            perfect_substat_types[1] === test_mainstat_type ||
            type === 'flower' ||
            type === 'plume')
        ) {
          checkMainstat = true
        } else if (
          doubleMainstat === 0 &&
          (perfect_substat_types[0] === test_mainstat_type ||
            type === 'flower' ||
            type === 'plume')
        ) {
          checkMainstat = true
        }
        if (checkMainstat) {
          test_artefact.substats.forEach((substat) => {
            let substat_type
            switch (substat.key) {
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
            }
            for (
              let index = doubleMainstat;
              index < perfect_substat_types.length;
              index++
            ) {
              const perfect_substat = perfect_substat_types[index]

              if (perfect_artefact.critUser || 'CRIT' === substat_type) {
                critMatch++
              }
              if (perfect_substat === substat_type) {
                match++
                break
              }
            }
          })

          if (perfect_artefact.critUser && critMatch === 2) {
            matches.push({
              test_artefact,
              perfect_artefact,
              match,
            })
          } else if (perfect_artefact.critUser === false && match >= 3) {
            matches.push({
              test_artefact,
              perfect_artefact,
              match,
            })

            // console.log(test_artefact)
            // console.log(perfect_artefact)
            // console.log(match)
            match = 0
            critMatch = 0
          }
        }
      }
    }
  }
  return matches
}
