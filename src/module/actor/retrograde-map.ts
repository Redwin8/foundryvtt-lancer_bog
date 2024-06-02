const frame_to_path: Record<string, string> = {
  BALOR: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Horus-BALOR.png",
  BARBAROSSA: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-HA-BARBAROSSA.png",
  "BLACK WITCH": "systems/lancer/assets/retrograde-minis/Retrograde-Minis-SSC-BLACK WITCH.png",
  BLACKBEARD: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-IPS-N-BLACKBEARD.png",
  "DEATH’S HEAD": "systems/lancer/assets/retrograde-minis/Retrograde-Minis-SSC-DEATHS HEAD.png",
  DRAKE: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-IPS-N-DRAKE.png",
  "DUSK WING": "systems/lancer/assets/retrograde-minis/Retrograde-Minis-SSC-DUSK WING.png",
  ENKIDU: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-HA-ENKIDU.png",
  EVEREST: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-GMS.png",
  GENGHIS: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-HA-GENGHIS.png",
  GOBLIN: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Horus-GOBLIN.png",
  GORGON: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Horus-GORGON.png",
  HYDRA: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Horus-HYDRA.png",
  ISKANDER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-HA-ISKANDER.png",
  KIDD: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-IPS-N-KIDD.png",
  KOBOLD: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-HORUS-KOBOLD.png",
  LANCASTER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-IPS-N-LANCASTER.png",
  LICH: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-HORUS-LICH.png",
  MANTICORE: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Horus-MANTICORE.png",
  METALMARK: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-SSC-METALMARK.png",
  MINOTAUR: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Horus-MINOTAUR.png",
  MONARCH: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-SSC-MONARCH.png",
  "MOURNING CLOAK": "systems/lancer/assets/retrograde-minis/Retrograde-Minis-SSC-MOURNING CLOAK.png",
  NAPOLEON: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-HA-NAPOLEON.png",
  NELSON: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-IPS-N-NELSON.png",
  PEGASUS: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Horus-PEGASUS.png",
  RALEIGH: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-IPS-N-RALEIGH.png",
  SAGARMATHA: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-GMS.png",
  SALADIN: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-HA-SALADIN.png",
  SHERMAN: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-HA-SHERMAN.png",
  SUNZI: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-HA-SUNZI.png",
  SWALLOWTAIL: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-SSC-SWALLOWTAIL.png",
  TOKUGAWA: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-HA-TOKUGAWA.png",
  TORTUGA: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-IPS-N-TORTUGA.png",
  VLAD: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-IPS-N-VLAD.png",
  ZHENG: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-IPS-N-ZHENG.png",
  ACE: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-ACE.png",
  AEGIS: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-AEGIS.png",
  ARCHER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-ARCHER.png",
  ASSASSIN: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-ASSASSIN.png",
  ASSAULT: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-ASSAULT.png",
  AVENGER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-AVENGER.png",
  BARRICADE: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-BARRICADE.png",
  BASTION: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-BASTION.png",
  BERSERKER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-BERSERKER.png",
  BOMBARD: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-BOMBARD.png",
  BREACHER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-BREACHER.png",
  CATAPHRACT: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-CATAPHRACT.png",
  DEMOLISHER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-DEMOLISHER.png",
  ENGINEER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-ENGINEER.png",
  GOLIATH: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-GOLIATH.png",
  HIVE: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-HIVE.png",
  HORNET: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-HORNET.png",
  HUMAN: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Misc-HUMAN.png",
  LURKER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-LURKER.png",
  MIRAGE: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-MIRAGE.png",
  MONSTROSITY: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Kaiju-RUGAM.png",
  OPERATOR: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-OPERATOR.png",
  PRIEST: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-PRIEST.png",
  PYRO: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-PYRO.png",
  RAINMAKER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-RAINMAKER.png",
  RONIN: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-RONIN.png",
  SCOURER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-SCOURER.png",
  SCOUT: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-SCOUT.png",
  SEEDER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-SEEDER.png",
  SENTINEL: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-SENTINEL.png",
  SNIPER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-SNIPER.png",
  SPECTER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-SPECTER.png",
  SPITE: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-SPITE.png",
  STRIDER: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-STRIDER.png",
  SQUAD: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Misc-INFANTRY.png",
  SUPPORT: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-SUPPORT.png",
  WITCH: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-Corpro-WITCH.png",
  ATLAS: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-SSC-ATLAS.png",
  CALIBAN: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-IPS-N-CALIBAN.png",
  "WHITE WITCH": "systems/lancer/assets/retrograde-minis/Retrograde-Minis-SSC-WHITE WITCH.png",
  EMPEROR: "systems/lancer/assets/retrograde-minis/Retrograde-Minis-SSC-EMPEROR.png",
};

export function frameToPath(name: string | null | undefined): string | null {
  return name ? frame_to_path[name.trim().toUpperCase()] : null ?? null;
}
