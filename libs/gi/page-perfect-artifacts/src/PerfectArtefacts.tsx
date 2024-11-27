import perfect_artefacts from './artefacts.json'

export default function testArtefact(_allArtifacts) {
  const matches = []
  for (const test_artefact of _allArtifacts) {
    for (const perfect_artefact of perfect_artefacts) {
      if (test_artefact.setKey === perfect_artefact.setKey) {
        const type = test_artefact.slotKey
        const perfect_substat_types = perfect_artefact[type].split(' + ')


        let test_mainstat_type
        let match = 0

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
            test_mainstat_type = 'EC'
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

        if (
          perfect_substat_types[0] === test_mainstat_type ||
          type === 'flower' ||
          type === 'plume'
        ) {
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
                substat_type = 'EC'
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
            for (let index = 0; index < perfect_substat_types.length; index++) {
              const perfect_substat = perfect_substat_types[index]

              if (index !== 0 && perfect_substat === substat_type) {
                match++
                break
              }
            }
          })
          if (match >= 3) {
            matches.push({
              test_artefact,
              perfect_artefact,
              match,
            })

            // console.log(test_artefact)
            // console.log(perfect_artefact)
            // console.log(match)
            match = 0
            break
          }
        }
      }
    }
  }
  return matches
}
