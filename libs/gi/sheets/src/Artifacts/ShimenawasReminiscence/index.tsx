import type { ArtifactSetKey } from '@genshin-optimizer/gi/consts'
import type { Data } from '@genshin-optimizer/gi/wr'
import { equal, greaterEq, input, percent } from '@genshin-optimizer/gi/wr'
import { cond, stg, trans } from '../../SheetUtil'
import { ArtifactSheet, setHeaderTemplate } from '../ArtifactSheet'
import type { SetEffectSheet } from '../IArtifactSheet'
import { dataObjForArtifactSheet } from '../dataUtil'

const key: ArtifactSetKey = 'ShimenawasReminiscence'
const setHeader = setHeaderTemplate(key)
const [, trm] = trans('artifact', key)

const [usedEnergyStatePath, usedEnergyState] = cond(key, 'usedEnergy')

const set2 = greaterEq(input.artSet.ShimenawasReminiscence, 2, percent(0.18))
const set4Norm = greaterEq(
  input.artSet.ShimenawasReminiscence,
  4,
  equal('used', usedEnergyState, percent(0.5))
)
const set4Charged = { ...set4Norm }
const set4Plunge = { ...set4Norm }

export const data: Data = dataObjForArtifactSheet(key, {
  premod: {
    atk_: set2,
    normal_dmg_: set4Norm,
    charged_dmg_: set4Charged,
    plunging_dmg_: set4Plunge,
  },
})

const sheet: SetEffectSheet = {
  2: { document: [{ header: setHeader(2), fields: [{ node: set2 }] }] },
  4: {
    document: [
      {
        header: setHeader(4),
        value: usedEnergyState,
        path: usedEnergyStatePath,
        name: trm('afterUseEnergy'),
        states: {
          used: {
            fields: [
              {
                node: set4Norm,
              },
              {
                node: set4Charged,
              },
              {
                node: set4Plunge,
              },
              {
                text: stg('duration'),
                value: 10,
                unit: 's',
              },
            ],
          },
        },
      },
    ],
  },
}
export default new ArtifactSheet(sheet, data)
