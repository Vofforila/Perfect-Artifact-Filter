import type { ArtifactSetKey } from '@genshin-optimizer/gi/consts'

export const artifactIdMap: Record<string | number, ArtifactSetKey> = {
  10001: 'ResolutionOfSojourner',
  10002: 'BraveHeart',
  10003: 'DefendersWill',
  10004: 'TinyMiracle',
  10005: 'Berserker',
  10006: 'MartialArtist',
  10007: 'Instructor',
  10008: 'Gambler',
  10009: 'TheExile',
  10010: 'Adventurer',
  10011: 'LuckyDog',
  10012: 'Scholar',
  10013: 'TravelingDoctor',
  14001: 'BlizzardStrayer',
  14002: 'Thundersoother',
  14003: 'Lavawalker',
  14004: 'MaidenBeloved',
  15001: 'GladiatorsFinale',
  15002: 'ViridescentVenerer',
  15003: 'WanderersTroupe',
  15005: 'ThunderingFury',
  15006: 'CrimsonWitchOfFlames',
  15007: 'NoblesseOblige',
  15008: 'BloodstainedChivalry',
  15009: 'PrayersForIllumination',
  15010: 'PrayersForDestiny',
  15011: 'PrayersForWisdom',
  15013: 'PrayersToSpringtime',
  15014: 'ArchaicPetra',
  15015: 'RetracingBolide',
  15016: 'HeartOfDepth',
  15017: 'TenacityOfTheMillelith',
  15018: 'PaleFlame',
  15019: 'ShimenawasReminiscence',
  15020: 'EmblemOfSeveredFate',
  15021: 'HuskOfOpulentDreams',
  15022: 'OceanHuedClam',
  15023: 'VermillionHereafter',
  15024: 'EchoesOfAnOffering',
  15025: 'DeepwoodMemories',
  15026: 'GildedDreams',
  15027: 'DesertPavilionChronicle',
  15028: 'FlowerOfParadiseLost',
  15029: 'NymphsDream',
  15030: 'VourukashasGlow',
  15031: 'MarechausseeHunter',
  15032: 'GoldenTroupe',
  15033: 'SongOfDaysPast',
  15034: 'NighttimeWhispersInTheEchoingWoods',
  15035: 'FragmentOfHarmonicWhimsy',
  15036: 'UnfinishedReverie',
  15037: 'ScrollOfTheHeroOfCinderCity',
  15038: 'ObsidianCodex',
  15039: 'LongNightsOath',
  15040: 'FinaleOfTheDeepGalleries',
} as const

export const artifactSlotMap = {
  EQUIP_NECKLACE: 'plume',
  EQUIP_BRACER: 'flower',
  EQUIP_SHOES: 'sands',
  EQUIP_RING: 'goblet',
  EQUIP_DRESS: 'circlet',
} as const
export type DArtifactSlotKey = keyof typeof artifactSlotMap
