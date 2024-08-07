var iFileName = "Ariadne's_CoS";
RequiredSheetVersion("13.1.13");

/*
    NOTICE
    
    This adds content from Ariadne's Codex of Strings' Patreon
    The deluxe versions take priority over their initiate counterparts, this also applies to other posts released

*/

/*
    IMPORTANT
    
    Since spells doesn't have specified classes, I assume all classes get them.

    FINISHED:
    Deluxe Books: TAFI, TNC, TLotU, TLB, TEC, TTN
    Initiate Books: TMC, TCoR, TIP, 
    Misc.: Way of Strength, Collge of Fools, School of The World Wizard, Shaper V2

    WIP:
    TBS, CoS (City of Strings)
    
*/

//this is a general source
SourceList["A:CoS"] = {
    name : "Ariadne's: Codex of Strings",
    abbreviation : "A:CoS",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/02/14"
};

CompanionList["ariadne's companion codex"] = {
    name : "Ariadne's Companion Codex",
    nameMenu : "Companion",
    source : [["A:CoS", 0]]
}

/*
        THE NOVA CLUSTER
*/

//The nova cluster addition
SourceList["A:TNC"] = {
    name : "Ariadne's: The Nova Cluster",
    abbreviation : "A:TNC",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};
spellSchoolList["Mul"] = "multiple schools"; //for the nebula spell

SpellsList["astrologist's reading"] = {
    name : "Astrologist's Reading",
    source : [["A:TNC", 10]],
    level : 1,
    school : "Div",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "0.5 min", //this might cause issues as normally there aren't spells with a casting time of 'seconds'
    timeFull : "This spell has a casting time of 30 seconds",
    range: "10 ft",
    components : "S",
    duration : "Instantaneous",
    ritual : true,
    description : "Spellcasting ability check vs. DC (8+target crea CR/Level); Know align. and motivations",
    descriptionFull : "Make a spellcasting ability check with the DC being 8 + the targets CR or Level. On a success, you know the target's current alignment, and may also glimpse into its current motivation. Unless they see you and are familiar with the spell, the target is not aware of your reading."
};
SpellsList["starfire"] = {
    name : "Starfire",
    source : [["A:TNC", 10]],
    level : 3,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    duration : "Conc, 1 min",
    save : "Cha",
    compMaterial : "a purple glass shard",
    description : "One crea expend an arcane resource worth at least a 1st level SS",
    descriptionFull : "When a creature first fails this save and at the end of each of their subsequent turns, the target must choose what the target consumes: a spell slot of the targets choice, a charge from a magic item, or another arcane resource worth at least a 1st level spell slot; like 2 sorcery points. If target has no arcane resources, this spell has no effect."
};
SpellsList["cosmic singularity"] = {
    name : "Cosmic Singularity",
    source : [["A:TNC", 10]],
    level : 7,
    school : "Conj",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "S:30-ft line",
    components : "V,M",
    compMaterial : "a small doll, a crush button worth at least 1cp",
    duration : "1 rnd", //6 seconds is one round, avoid conflicts within the sheet
    save : "Str",
    description : "All crea within 10ft 6d6 Force dmg, vanish; +6d6 Force dmg start of your next turn, transported into astral sea",
    descriptionFull : "You conjure a cannonball-sized gravitational orb. This orb travels 30 ft in a straight line, and any creatures within 10ft of the orb must make Strength save or take 6d6 Force damage and be absorbed into the orb. Creatures absorbed by the orb are transported to a demiplane where any effects from outside the demiplane cannot effect the creatures inside. A creature can communicate through the orb using magical means. A creature can teleport away or use its action to make an Strength (Athletics) check to escape. The creature appears 5 ft outside the orb on a success. Any creatures left inside the orb at the start of your next turn, they take an additional 6d6 Force damage and instantly teleported to a random location in the Astral Sea"
};
SpellsList["astral dust"] = {
    name : "Astral Dust",
    source : [["A:TNC", 50]],
    level : 0,
    school : "Abjur",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 bns",
    range : "Self",
    components : "S",
    duration : "1 rnd",
    description : "+1 to my AC (+2 at level 5), lasts until the start of my next turn; Crea ignore if doesn't rely on sight"
};
SpellsList["gravity blast"] = {
    name : "Gravity Blast",
    source : [["A:TNC", 50]],
    level : 2,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    components : "S, M",
    compMaterial : "a meteorite shard",
    duration : "Instantaneous",
    range : "60 ft",
    save : "Str",
    description : "Crea within 20 ft; 2d10+1d10/SL force dmg, pushed 10 ft away; save halves and aren't pushed.",
    descriptionFull : "Choose a point within range. All creatures within 20 ft must make a Strength saving throw taking 2d10 force damage and pushed 10 ft away from the point; or half damage on a save and aren't pushed." + AtHigherLevels + "When you cast this spell with a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
};
SpellsList["gravity's favor"] = {
    name : "Gravity's Favor",
    source : [["A:TNC", 50]],
    level : 4,
    school : "Trans",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    components : "S, M",
    compMaterial : "a small platinum sphere",
    duration : "Conc, 1 min",
    range : "Self",
    description : "+force dmg to melee atk equal to  spell ability mod; Adv. grapple/shove; Disadv. grapple/shove me; Jump doubled; +10 ft walking spd",
    descriptionFull : "My melee attacks deal additional force damage equal to my spellcasting ability modifier. I have advantage on grapple and shove checks against other creatures, and other creatures have disadvantage on grapple and shove checks against me. My jump distance is doubled and my walking speed increases by 10ft."
};
SpellsList["nebula"] = {
    name : "Nebula",
    source : [["A:TNC", 50]],
    level : 9,
    school : "Mul",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    components : "V,S",
    duration : "Conc, 1 min",
    range : "120 ft",
    save : "Varies",
    description : "30ft rad sphere; Choose one of the following from B.; Action to move it 10ft",
    descriptionFull : "Gold: Orion's Chains. Creatures within the area must make a Wisdom saving throw or be paralyzed. At the end of each of their turns, they can attempt the save again. Red: Burning Core. Creatures within the area must make a Strength saving throw or be pulled to the center of the sphere, taking 6d10 radiant damage and 6d10 fire damage, before being spit out by a flare, landing in a place of the caster's choice 20ft away from the center of the Nebula's area. Blue: Particle Accelerator. Creatures within the area must make a Dexterity saving throw, taking 10d12 force on a failed save, or half on a success. Creatures killed this way are molecularly destroyed. Purple: Unendurable Eminence. Creatures within the area must make a DC 10 Charisma saving throw or take 150 force damage that cannot be prevented in any way. Creatures killed this way disappears without leaving behind a body. The DC increases by 2 each time a creature has to roll it between long rests. I can use an action on my turn to move the center of the sphere up to 10ft."
};
MagicItemsList["dame eleanors flare"] = {
    name : "Dame Eleanors Flare",
    source : [["A:TNC", 56]],
    type : "weapon (pistol)",
    rarity : "rare",
    advantages : [["Initiative", true]],
    description : "This pistol has a +2 to damage and attack rolls. Additionally, I can choose to quickdraw, giving myself advantage on Initiative rolls. Doing so, I must make an attack with this weapon as my first action in combat.",
    attunement : true,
    weaponOptions : [{
        regExpSearch : /^(?=.*(dame|eleanor?s))(?=.*flare).*$/i,
        name : "Dame Eleanors Flare",
        source : [["A:TNC", 56]],
        type : "Martial",
        ability : 2,
        list : "firearm",
        abilitytodamage : true,
        damage : [1, 10, "piercing"],
        range : "30/90 ft",
        description : "Ammunition, loading; Quickdraw",
        tooltip : "Quickdraw: Advantage on Initiative roll, first action must be an attack with this weapon",
        special : true,
        modifiers : [2, 2],
        isMagicWeapon : true,
        selectNow : true
    }],
};
MagicItemsList["quartermaster's beret"] = {
    name : "Quartermaster's Beret",
    source : [["A:TNC", 54]],
    type : "wondrous item",
    rarity : "uncommon",
    description : "I gain a +2 to Intimidation checks, +4 against creatures of chaotic alignment. Additionally, I can cast command (DC 13) once per short rest without any component materials.",
    fixedDC : 13,
    spellcastingBonus : [{
        name : "Quartermaster's Beret",
        spells : ["command"],
        selection : ["command"],
        firstCol : "oncesr"
    }]
};
MagicItemsList["parchment of the wayfarer"] = {
    name : "Parchment of the Wayferer",
    source : [["A:TNC", 56]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "This parchment appears to be a normal piece of parchment. Saying 'Ahrym Eleian' will make the parchment instantly redraw itself to represent an area 50 miles around its current position. Once per long rest, you may choose a point on the map to create an arcane eye. Places shrouded by divination appear as blank space and cannot be targeted by the arcane eye.",
    spellcastingBonus : [{
        name : "Parchment's Arcane Eye",
        spells : ["arcane eye"],
        selection : ["arcane eye"],
        firstCol : "oncelr"
    }],
    extraLimitedFeatures : [{
        name : "Arcane Eye (Parchment)",
        usages : 1,
        recovery : "long rest"
    }]
};
MagicItemsList["burstfire hoverback"] = {
    name : "Burstfire Hoverback",
    source : [["A:TNC", 56]],
    type : "wondrous item",
    rarity : "lengedary",
    attunement : true,
    description : "This hoverback grants a flying speed of 60ft. Additionally, it has 10 charges which can be used for Boom Barrage (5 charges), Overclocked Thrusters (3 charges), or Evasive Maneuvers (2 charges). See notes page.",
    toNotesPage : [{
        name : "Burstfire Hoverback",
        note : desc([
            "This hoverback is imbued with powerful and explosive arcane energy. When worn, it binds seamlessly to your back, with two ethereal flames that spark with blue and purple energy giving a faint hum. However, it does not burn you. This grants me 60ft of fly speed and has 10 charges, which can be expended to create the following effects: ",
            "Boom Barrage (5 charges): " + "As an actions, you can unleash a barrage of five arcane missiles from the jetpack. Each missile targets a point with 120 ft. Creatures within 10 ft of where the missile hits must make a DC 20 Dexterity saving throw, taking 4d10 force damage on a fail, or half as much on a success.",
            "Overclocked Thrusters (3 charges): " + "As a bonus action, you can activate the jetpack's overdrive, doubling your flying speed to 120 ft for up to 10 minutes.",
            "Evasive Maneuvers (2 charges): " + "As a reaction to being targeted by a spell or ranged attack, you can use the jetpack's energy to make a quick evasive maneuver. You gain advantage on the saving throw or a +5 bonus to AC against the triggering attack."
        ]),
    }],
    action : [["action", "Boom Barrage (5 charges)"], ["bonus action", "Overclocked Thrusters (3 charges)"], ["reaction","Evasive Maneuvers (2 charges) "]],
    extraLimitedFeatures : [{
        name : "Burstfire Charges",
        usages : 10,
        recovery : "long rest" //doesn't explicitly state the recovery time 
    }]
};
MagicItemsList["astral suit"] = {
    name : "Astral Suit",
    source : [["A:TNC", 7]],
    type : "armor (half plate)",
    rarity : "uncommon",
    attunement : true,
    description : "While attuned to this armor, I have advantage to resist cloud-based effects, such as those created by the Slow, Stinking Cloud, or Cloudkill spells. Additionally, every attack that deals fire, lightning, or acid damage is reduced by 3.",
    savetxt : { adv_vs : ["cloud-based effects"], text : ["-3 damage per attack dealing lightning, fire, or acid dmg"] },
    armorAdd : "Astral Suit",
    armorOptions : [{
        regExpSearch : /astral suit/i,
		name : "Astral Suit",
        source : [["A:TNC", 7]],
        type : "medium",
        ac : 15,
        stealthdis : true,
		weight : 40
    }]
};
MagicItemsList["baldric of gravity"] = {
    name : "Baldric of Gravity",
    source : [["A:TNC", 15]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "While I wear this belt, gravity pulls me towards the surface I am standing on. Whenever I switch your gravity to a new surface, I must succeed on a DC 12 Dexterity (Acrobatics) check. Otherwise, I fall prone at the point where I attempted to switch gravity.",
};
MagicItemsList["contrabandist's bracer"] = {
    name : "Contrabandist's Bracer",
    source : [["A:TNC", 16]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "This bracer buzzes softly when officers of the law enter a range of 120 ft of it. I can use an action to cast nondetection, requiring no components. Once I do so, I can't do it again until I finish a long rest.",
    spellcastingBonus : [{
        name : "Contrabandist's Bracer",
        spells : ["nondetection"],
        selection : ["nondetection"],
        firstCol : "oncelr"
    }],
    spellChanges : {
        "nondetection" : {
            compMaterial : "",
            changes : "The Contrabandist's Bracer allows me to cast nondetecting once per long rest without using material components."
        }
    }
};
MagicItemsList["impulse capsule"] = {
    name : "Impulse Capsule",
    source : [["A:TNC", 16]],
    type : "consumable",
    rarity : "very rare",
    description : "For the next hour after consuming this capsule, I auto-succeed all Wisdom (History) checks within the last year, advantage on Intelligence-based skill checks and saving throws, and a 1d12 bonus to Dexterity saving throws and initiative rolls. After an hour, I take a level of exhaustion. I ignore exhaustion if I consume more capsules."
};
MagicItemsList["lex-i prototype"] = {
    name : "Lex-I Prototype",
    source : [["A:TNC", 16]],
    type : "wondrous item",
    rarity : "artifact",
    attunement : true,
    prerequisite : "Must amputate your right arm and must be aligned with an 'Eminent Wisp' to attune, select 'yes' at the bottom if you have",
    prereqeveal : function(v) { //force to be false to notify user that they must amputate arm and be attuned to an eminent wisp.
        return false;
    },
    fixedDC : 18,
    description : "I gain the following: immune to diseases, poison dmg, and poisioned condition, ignore the first Impulse Capsule effects I take between long rests, can make a melee weapon attack using Strength dealing 2d12+Str mod+3 force dmg, can make a beam attack 30ft long and 5ft wide DC 18 Dex save taking 16d8 force dmg or half on a save. After firing this beam, the arm goes dormant for 1d4 days. Absorbing an Eminent Wisp awakens the item early.",
    savetxt : {immune : ["poison dmg", "disease", "poisioned condition"]},
    weaponOptions : [{
        regExpSearch : /lex-i prototype strike/i,
        name : "Lex-I Prototype Strike",
        source : [["A:TNC", 16]],
        ability : 1,
        type : "Magic Item",
        abilitytodamage : true,
        damage : [2,12,"force"],
        range : "Melee",
        description : "Unarmed strike; Special",
        special : true,
        isMagicWeapon : true,
        isAlwaysProf : true,
        modifiers : [0, 3],
        selectNow : true
    }, {
        regExpSearch : /lex-i prototype beam/i,
        name : "Lex-I Prototype Beam",
        baseWeapon : "unarmed strike", //technically melee weapon attack
        list : "Melee",
        source : [["A:TNC", 16]],
        ability : 2,
        type : "Magic Item",
        abilitytodamage : false,
        damage : [16,8,"force"],
        range : "Ranged, 30ft",
        description : "Ranged 30ft long, 5ft wide beam; Special",
        tooltip : "Special: After firing, arm goes dormant for 1d4 days. A wisp ends this early",
        special : true,
        isAlwaysProf : true,
        isMagicWeapon : false, //prevents attack calculations 
        isNotWeapon : true,
        dc : true,
        selectNow : true
    }]
};
var eminent_wisp_toNotes = [
    "You may choose to use your bonus action to consume an Eminent Wisp. If you are not native to the Nova Cluster, you must succeed on a DC 20 Constitution saving throw or suffer 10d6 force damage. Once you fail this saving throw, you cannot attempt to commune with an Eminent Wisp for the next 24 hours. On a success, you suffer only 5d6 force damage and become aligned with the Eminent Wisp for 24 hours.",
    "While aligned, you gain a single level in your main class and an additional attunement slot for the duration. Additionally, you can use the Wisp's power to recover a single class feature of 5th level or lower, or a single spell slot of up to 3rd level. The Wisp isn't consumed this way, but you cannot use this ability again until you finish a long rest.",
    "After 24 hours have passed, you must repeat the saving throw to align yourself with the Wisp again. On a failure, you cannot align with an Eminent Wisp for the next week.",
    "If you successfully align yourself with a Wisp for three days in a row, you become permanently bound to that wisp and gain its benefits permanently. You cannot align with another wisp until you renounce the initial one. Upon death, the wisp will hover above your corpse, waiting to be claimed by another."
];
MagicItemsList["eminent wisp"] = {
    name : "Eminent Wisp",
    source : [["A:TNC", 19]],
    type : "treasure",
    rarity : "legendary",
    attunement : true,
    description : "Gain a single level in your main class and an additional attunement slot. You cannot benefit from another wisp. If you want to attune to another wisp, you must renounce your previous wisp. Every 24 hours, you must succeed a DC 20 Constitution saving throw or you lose these benefits for a week. See Notes",
    toNotesPage : [{
        name : "Eminent Wisp",
        note : desc(eminent_wisp_toNotes).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/you /ig, "I ").replace(/yourself /ig, "myself ")
    }]
};
MagicItemsList["solar needle"] = {
    name : "Solar Needle",
    source : [["A:TNC", 46]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : false,
    description : "This needle emits dim light in a 10ft radius. I can use it to sow, making the cloth shine with residual gold dust for 24 hours granting advantage on persuasion checks. I can also stab the needle into my skin (as an action) dealing 1 piercing damage, and gain resistance to fire and radiant damage. I take 1 psychic damage per minute it stays in my skin.",
    dmgres : [
        ["Fire", "Fire (needle in skin)"],
        ["Radiant", "Rad. (needle in skin"]
    ]
};
RaceList["cetkar"] = {
    regExpSearch : /^(?=.*cetkar).*$/i,
    name : "Cetkar",
    source : [["A:TNC", 60]],
    plural : "Cetkari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
        swim : { spd : "walk", enc : 0}
    },
    skills : ["Intimidation"],
    age : " same age rate and lifespan as humans",
    height : " stand between 6 to 7 feet tall",
    weight : " weighs around 200 to 300 pounds",
    trait : "Cetkar (+1 Strength and +1 Constitution)" +desc([ 
        "Amphibian Adaptation: I can breath air and water, and have a swimming speed equal to my walking speed.", 
        "Cetkari Jaws: My jaws are natural weapons dealing 1d8 + my Strength modifier piercing damage. On a hit and if the creature is medium or smaller, I can grapple it. The DC for my grapple check is 8 + prof bonus + Strength modifier.",
        "Threatening Presence: I gain proficiency with Intimidation. Additionally, I have advantage on the check against creatures that have seen me attack with my Cetkari Jaws.",
    ]),
    weaponOptions : [{
        regExpSearch : /^(?=.*cetkari)(?=.*jaws).*$/i,
        name : "Cetkari Jaws",
        source : [["A:TNC", 60]],
        type : "Natural",
        ability : 1,
        abilitytodamage : true,
        damage : [1, 8, "piercing"],
        range : "Melee",
        description : "Natural; On hit, choose to grapple",
        list : "melee",
        isAlwaysProf : true,
        selectNow : true
    }],
    scorestxt : "Cetkar: +1 Strength , +1 Constitution;",
    scores : [1, 0, 1, 0, 0, 0],
    abilitySave : 1,
};
RaceList["cetkar, quaru"] ={
    regExpSearch : /^(?=.*cetkar|cetkari)(?=.*quaru).*$/i,
    name : "Cetkar Quaru",
    source : [["A:TNC", 61]],
    plural : "Cetkari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
        swim : { spd : "walk", enc : 0}
    },
    skills : ["Intimidation"],
    age : " same age rate and lifespan as humans",
    height : " stand between 6 to 7 feet tall",
    weight : " weighs around 200 to 300 pounds",
    trait : "Cetkar, Quaru (+1 Str, +1 Con, and +1 Str or Cha)" +desc([
        "Exceptional Audience: I have advantage on perception checks relying on hearing, and are considered to be within earshot in distances twice as large as other humanoids.",
        "Deadly Strength: I have a +2 bonus to damage rolls made against creatures below half their max hp; temp HP does not count against this condition.",
        "Born Leader: I can cast friends at will requiring no components. When I reach 3rd level, I can cast heroism twice per long rest. Charisma is my spellcasting ability for this."
    ]),
    weaponOptions : [{
        regExpSearch : /^(?=.*cetkari)(?=.*jaws).*$/i,
        name : "Cetkari Jaws",
        source : [["A:TNC", 60]],
        type : "Natural",
        ability : 1,
        abilitytodamage : true,
        damage : [1, 8, "piercing"],
        range : "Melee",
        description : "Natural; On hit, choose to grapple",
        list : "melee",
        isAlwaysProf : true,
        selectNow : true
    }],
    scorestxt : "Cetkar, Quaru: +1 Strength , +1 Constitution, and +1 to Strength or Charisma;",
    scores : [1, 0, 1, 0, 0, 0],
    abilitySave : 6,
    spellcastingBonus : [{
        name : "Born Leader (friends)",
        spells : ["friends"],
        selection : ["friends"],
        times : 1
    }],
    spellChanges  : {
        "friends" : {
            components : "",
            changes : "At will, requiring no components"
        }
    },
    features : {
        "racialfeature3" : {
            name : "Born Leader (heroism)",
            minlevel : 3,
            usages : 2,
            recovery : "long rest",
            spellcastingBonus : [{
                name : "Born Leader (heroism)",
                spells : ["heroism"],
                selection : ["heroism"],
                times : 1,
            }]
        }
    }
};
RaceList["cetkar, fykari"] ={
    regExpSearch : /^(?=.*cetkar|cetkari)(?=.*fykari).*$/i,
    name : "Cetkar Fykari",
    source : [["A:TNC", 61]],
    plural : "Cetkari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
        swim : { spd : "walk", enc : 0}
    },
    trait : "Cetkar, Fykari (+1 Strength, +1 Constitution, and +1 Dexterity or Intelligence)" + desc([
        "Constrict and Bite: I can use my Dexterity modifier instead of Strength to resolve grapple checks. My bite attacks deal 1d12 piercing damage instead of 1d8 when the creature is grappled by me.",
        "Impassive Killer: I have advantage on being frightened and other creatures have disadvantage against being frightened by me.",
        "Artificer's Psyche: I gain proficiency with Tinker's Tools and have advantage on rolls to understand the functioning of mechanical artificery. Additionally, I can cast mending, requiring no components.",
    ]),
    toolProfs : ["Tinker's Tools"],
    age : " same age rate and lifespan as humans",
    height : " stand between 6 to 7 feet tall",
    weight : " weighs around 200 to 300 pounds",
    weaponOptions : [{
        regExpSearch : /^(?=.*cetkari)(?=.*jaws).*$/i,
        name : "Cetkari Jaws",
        source : [["A:TNC", 60]],
        type : "Natural",
        ability : 1,
        abilitytodamage : true,
        damage : [1, 8, "piercing"],
        range : "Melee",
        description : "Natural; On hit, choose to grapple; Versatile (1d12 if grappled by me)",
        list : "melee",
        isAlwaysProf : true,
        selectNow : true
    }],
    spellcastingBonus : [{
        name : "Artificer's Psyche",
        spells : ["mending"],
        selection : ["mending"],
        times : 1
    }],
    spellChanges : {
        "mending" : {
            components : "",
            changes : "I can cast mending at will requiring no components."
        }
    },
    savetxt : {
        text : "Adv. vs me being frightened; Crea have disadv. vs being frightened by me"
    },
    scorestxt : "Cetkar, Quaru: +1 Strength , +1 Constitution, and +1 to Dexterity or Intelligence;",
    scores : [1, 0, 1, 0, 0, 0],
    abilitySave : 6
};
MagicItemsList["assistant drone v-38"] = {
    name : "Assistant Drone V-38",
    source : [["A:TNC", 47]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true,
    description : "This drone can only be commanded by me. If reduced to 0 HP and if I'm proficient with tinker's tools, I can repair it over the course of a short rest. I may also transform the drone into a helmet giving me 120 ft of darkvision, I can breathe underwater, and my AC increases by 2. The drone cannot use any of its features or any of its actions (includes bns. and reactions) while like this. However, it can still talk.",
    vision : [
        ["Darkvision (drone helmet on)", 120]
    ],
    savetxt : {text : "I can breath underwater while wearing the drone as a helmet"},
    creaturesAdd : [["Assistant Drone V-38"]],
    creatureOptions : [{
        name : "Assistant Drone V-38",
        source : [["A:TNC", 47]],
        size : 4,
        type : "Construct",
        alignment : "Unaligned",
        ac : 15,
        hp : 34,
        hd : [8,6],
        speed : "fly 50 ft (hover)",
        proficiencyBonus : 2,
        challengeRating : "1",
        scores : [12, 14, 13, 8, 12, 14],
        senses : "Darkvision 120 ft",
        attacksAction : 1,
        passivePerception : 13,
        damage_immunities : "poison, psychic",
        condition_immunities : "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
        languages : "Languages of its creator",
        attacks : [{
            name : "Bump",
            ability : 1,
            damage : [1,6,"bludgeoning"],
            range : "Melee (5 ft)",
            description : "Bumps into a target as a melee weapon attack.",
        }, {
            name : "Beam",
            ability : 6,
            damage : [1,6,"radiant"],
            range : "Ranged spell attack (60 ft)",
            description : "Fires a beam at a target as a ranged spell attack."
        }],
        traits : [{
            name : "Advice",
            description : "If asked, the drone gives advice about any given situation. Sometimes without being prompted too. It likes to talk, but it's not very smart."
        },{
            name : "Sturdy Flyer",
            description : "The drone has handles underneath. A medium or smaller creature can grab onto the handles and be carried at half the drone's fly speed.",
        },{
            name : "Skillful Helper (3/day)",
            description : "This drone can add its proficiency bonus (+2) to an ability check, attack roll, or saving throw made by the creature it is attuned to, if said creature is within 30ft."
        }],
        actions : [{
            name : "Intercept",
            description : "As a reaction, the drone can block an attack that targets a creature within 5 ft of it, making itself the target of the attack instead."
        }]
    }]
};
MagicItemsList["hellspitter"] = {
    name : "Hellspitter",
    source : [["A:TNC", 49]],
    type : "weapon (pistol)",
    rarity : "artifact",
    attunement : true,
    description : "This pistol has a +3 to attack and damage rolls, doesn't require ammunition, doesn't need to be reloaded, and fires shards of molten mithril dealing 2d6 piercing and 2d6 fire damage on a hit. This ignores resistances, not immunities, and reduces the target's HP for an hour. Critical hits deal an additional 4d6 fire damage. I can also cast fireball at will requiring no components.",
    weaponOptions : [{
        name : "Hellspitter",
        source : [["A:TNC", 49]],
        regExpSearch : /hell spitter/i,
        type : "Martial",
        ability : 2,
        list : "firearm",
        abilitytodamage : true,
        damage : [4,6, "fire"],
        range : "30/90 ft",
        description : "Special; 2d6 Fire + 2d6 Rad dmg on hit; +4d6 Fire on crit (included above)",
        tooltip : "Special: Doesn't require ammunition and doesn't need to reload.",
        special : true,
        modifiers : [3, 3],
        isMagicWeapon : true,
        selectNow : true
    }],
    spellcastingBonus : [{
        name : "Hellspitter (Fireball)",
        spells : ["fireball"],
        selection : ["fireball"],
        firstCol : "atwill"
    }],
    spellChanges : {
        "fireball" : {
            compMaterial : "",
            changes : "I can cast fireball at will requiring no material components."
        }
    }
};
MagicItemsList["malaise"] = {
    name : "Malaise",
    source : [["A:TNC", 49]],
    type : "weapon (dagger)",
    rarity : "artifact",
    attunement : true,
    description : "This dagger has a +3 to attack and damage rolls and deals an additional 3d6 Cold damage. It can also fly, become invisible, and shift into the ethereal plane at will. I can control and use its abilities telekinetically as long as it's within 60ft of me. It follows my every command, but when left alone, it floats atop my head seemingly about to drop down. This creates an ever-present feeling of dread. While the dagger is like this, I cannot be surprised.",
    /*
        It doesn't state the fly speed
        Doesn't say whether or not it still functions as a normal dagger (melee 20/60ft) and if we can (at will) make it fly 60ft and attack someone
        Assuming it has a fly speed of 60ft and takes an action to attack
    */
    weaponOptions : [{ 
        regExpSearch : /malaise/i,
        name : "Malaise",
        source : [["A:TNC", 49]],
        baseWeapon : "dagger",
        description : "Finesse, light, thrown; +3d6 cold dmg; fly, invis, plane shift (ethereal) at will; Special",
        tooltip : "Special: Command and use its features telekinetically up to 60ft",
        range : "Melee, 20/60 ft",
        modifiers : [3,3],
        selectNow : true
    }],
    savetxt : { immune : ["surprised"] }
};
FeatsList["magic specialist"] = {
    name : "Magic Specialist",
    source : [["A:TNC", 44]],
    prerequisite : "The magic initiate feat",
    prereqeval : function(v) { return CurrentFeats.known.indexOf("magic initiate") !== -1; },
    description : "Every spell you cast from the chosen school gives you a token. At five tokens, the next spell of 5th level or lower from that school of magic does not expend a spell slot. Cantrips do not award tokens"
    + " A single 1st level spell from the school becomes a cantrip. At 11th level, a single 2nd level spell from the chosen school becomes a cantrip.",
    choices : ["Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
    selfChoosing : function () {
		var MagicInit = CurrentFeats.known.indexOf("magic initiate");
		if (MagicInit !== -1 && CurrentFeats.choices[MagicInit]) {
			return CurrentFeats.choices[MagicInit];
		}
	},
    "bard" : {
		description : "Everytime I cast a bard spell, I gain a token. At 5 tokens, the next bard spell of 5th level or lower does not expend a spell slot. Cantrips doesn't award tokens. Additionally, a single 1st level bard spell becomes a cantrip for me. At 11th level, this becomes a single 2nd level bard spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "bard",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }, {
            name : "Magic Specialist",
            "class" : "bard",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    },
	"cleric" : {
		description : "Every time you cast a cleric spell, you gain a token. At 5 tokens, the next cleric spell of 5th level or lower does not expend a spell slot. Cantrips don't award tokens. Additionally, a single 1st-level cleric spell becomes a cantrip for you. At 11th level, this becomes a single 2nd-level cleric spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "cleric",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }],
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "cleric",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    },
	"druid" : {
		description : "Every time you cast a druid spell, you gain a token. At 5 tokens, the next druid spell of 5th level or lower does not expend a spell slot. Cantrips don't award tokens. Additionally, a single 1st-level druid spell becomes a cantrip for you. At 11th level, this becomes a single 2nd-level druid spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "druid",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }],
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "druid",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    },
	"sorcerer" : {
		description : "Every time you cast a sorcerer spell, you gain a token. At 5 tokens, the next sorcerer spell of 5th level or lower does not expend a spell slot. Cantrips don't award tokens. Additionally, a single 1st-level sorcerer spell becomes a cantrip for you. At 11th level, this becomes a single 2nd-level sorcerer spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "sorcerer",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }],
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "sorcerer",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    },
	"warlock" : {
		description : "Every time you cast a warlock spell, you gain a token. At 5 tokens, the next warlock spell of 5th level or lower does not expend a spell slot. Cantrips don't award tokens. Additionally, a single 1st-level warlock spell becomes a cantrip for you. At 11th level, this becomes a single 2nd-level warlock spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "warlock",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }],
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "warlock",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    },
	"wizard" : {
		description : "Every time you cast a wizard spell, you gain a token. At 5 tokens, the next wizard spell of 5th level or lower does not expend a spell slot. Cantrips don't award tokens. Additionally, a single 1st-level wizard spell becomes a cantrip for you. At 11th level, this becomes a single 2nd-level wizard spell.",
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "wizard",
            level : [1,1],
            times : levels.map( function(n) { return n < 11 ? 1 : 0; }),
            firstCol : "atwill"
        }],
        spellcastingBonus : [{
            name : "Magic Specialist",
            "class" : "wizard",
            level : [2,2],
            times : levels.map( function(n) { return n >= 11 ? 1 : 0; }),
            firstCol : "atwill"
        }]
    }
};
FeatsList["reactive"] = {
    name : "Reactive",
    source : [["A:TNC", 44]],
    description : "I gain a +2 bonus to Initiative rolls. I may use a bonus action on my turn to gain an additional reaction for this round.",
    addMod : [ { type : "skill", field : "Init", mod : 2, text : "I gain a +2 to my Initiative rolls." } ],
    action : ["bonus action", "Reactive (+1 Reaction)"]
};
FeatsList["against all odds"] = {
    name : "Against All Odds",
    source : [["A:TNC", 44]],
    description : "My Charisma score increase by 1, up to a max of 20. For every ally within 30ft of me that has fewer than half their total hit points (including me), I gain a +1 to all of my attack rolls, saving throws, and ability checks, up to a maximum of +3.",
    scores : [0, 0, 0, 0, 0, 1]
};
FeatsList["perfectionist"] = {
    name : "Perfectionist",
    source : [["A:TNC", 44]],
    description : "My Intelligence score increases by 1, up to a max of 20. I gain proficiency in a skill of my choice or expertise if I'm already proficient. Whenever I fail a DC or get an undesired result, I may roll again with advantage. I cannot use this ability again until I finish a short rest.",
    skillstxt : "Proficiency with a skill of my choice, or expertise if I'm already proficient.",
    usages : 1,
    recovery : "short rest"
};
FeatsList["nerves of steel"] = {
    name : "Nerves of Steel",
    source : [["A:TNC", 44]],
    description : "My Intelligence, Wisdom, or Charisma increases by 1, up to a max of 20. My DC concentration checks never exceed 20. While I concentrate on a spell, I gain a +2 to my AC.",
    choices : ["Intelligence", "Wisdom", "Charisma"],
    "intelligence" : {
		description : "My Intelligence increases by 1, up to a max of 20. My DC concentration checks never exceed 20. While I concentrate on a spell, I gain a +2 to my AC.",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "My Wisdom increases by 1, up to a max of 20. My DC concentration checks never exceed 20. While I concentrate on a spell, I gain a +2 to my AC.",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "My Charisma increases by 1, up to a max of 20. My DC concentration checks never exceed 20. While I concentrate on a spell, I gain a +2 to my AC.",
		scores : [0, 0, 0, 0, 0, 1],
	}
};

/*

        THE LAST BASTION

*/

SourceList["A:TLB"] = {
    name : "Ariadne's: The Last Bastion",
    abbreviation : "A:TLB",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/02/14"
};

CompanionList["ariadne's: the last bastion companion codex"] = {
    name : "Ariadne's: The Last Bastion Companion Codex",
    nameMenu : "Companion",
    source : [["A:TLB", 0], ["A:CoS", 0]]
}

spellSchoolList["Omni"] = "omniturgy";

MagicItemsList["teng arcanocyper"] = {
    name : "Teng Arcanocyper",
    source : [["A:TLB", 6]],
    type : "wondrous item",
    description : desc([
        "This Arcanocypher allows me to cast spells from any class using a spell slot matching the spell's level. To change spells, I cast a new one on the console and make a Dexterity (Sleight of Hand) check, DC 10 + spell level. If I fail, it stops working for 24 hours, then resumes with the previous spell."
    ]),
    choices : ["Teng Arcanocyper, 3rd level (rare)", "Teng Arcanocyper, 5th level (very rare)", "Teng Arcanocyper, 8th level (legendary)", "Teng Arcanocyper, 9th level (artifact)"],
    "teng arcanocyper, 3rd level (rare)" : {
        name : "Teng Arcanocyper, 3rd level",
        rarity : "rare",
        description : "I can wire any spell up to 3rd level. To change spells, I cast a new one on the console and make a Dexterity (Sleight of Hand) check, DC 10 + spell level. If I fail, it stops working for 24 hours, then resumes with the previous spell.",
        spellcastingBonus : [{
            name : "Teng Arcanocyper (3rd level)",
            "class" : "any",
            level : [1, 3],
            times : 1
        }]
    },
    "teng arcanocyper, 5th level (very rare)" : {
        name : "Teng Arcanocyper, 5th level",
        rarity : "very rare",
        description : "I can wire any spell up to 5th level. To change spells, I cast a new one on the console and make a Dexterity (Sleight of Hand) check, DC 10 + spell level. If I fail, it stops working for 24 hours, then resumes with the previous spell.",
        spellcastingBonus : [{
            name : "Teng Arcanocyper (5th level)",
            "class" : "any",
            level : [1, 5],
            times : 1
        }]
    },
    "teng arcanocyper, 8th level (legendary)" : {
        name : "Teng Arcanocyper, 8th level",
        rarity : "very rare",
        description : "I can wire any spell up to 8th level. To change spells, I cast a new one on the console and make a Dexterity (Sleight of Hand) check, DC 10 + spell level. If I fail, it stops working for 24 hours, then resumes with the previous spell.",
        spellcastingBonus : [{
            name : "Teng Arcanocyper (8th level)",
            "class" : "any",
            level : [1, 8],
            times : 1
        }]
    },
    "teng arcanocyper, 9th level (artifact)" : {
        name : "Teng Arcanocyper, 9th level",
        rarity : "artifact",
        description : "I can wire any spell up to 9th level. To change spells, I cast a new one on the console and make a Dexterity (Sleight of Hand) check, DC 10 + spell level. If I fail, it stops working for 24 hours, then resumes with the previous spell.",
        spellcastingBonus : [{
            name : "Teng Arcanocyper (9th level)",
            "class" : "any",
            level : [1, 9],
            times : 1
        }]
    }
};

AddSubClass("sorcerer", "teng", {
    regExpSearch : /^(?=.*teng)(?=.*sorcerer).*$/i,
    subname : "Teng Sorcerer",
    source : [["A:TLB", 7]],
    features : {
        "subclassfeature1" : {
            name : "Arcane Sight",
            source : [["A:TLB", 7]],
            minlevel : 1,
            description : desc([
                "I can see normally in magical and non-magical darkness to a distance of 30 ft. If I have darkvision, I have its range instead. At 6th level, I am permanently under the effects of detect magic if I am conscious.",
            ]),
            spellcastingBonus : [{
                name : "Arcane Sight",
                spells : ["detect magic"],
                selection : ["detect magic"],
                times : levels.map(function (n) { return n < 6 ? 0 : 1 })
            }],
            vision : [
                ["Arcane Sight", 30]
            ],
        },
        "subclassfeature1.1" : {
            name : "Promise to the Fallen",
            source : [["A:TLB", 7]],
            minlevel : 1,
            description : desc([
                'Use the "Choose Feature" to select a spell.'
            ]),
            choices : ["Promise of Balance", "Vow of Law", "Oath of Freedom", "Pledge of Protection", "Assurance of Plight"],
            "promise of balance" : {
                name : "Promise of Balance",
                description : desc([
                    "I learn the protection from evil and good spell."
                ]),
                spellcastingBonus : [{
                    name : "Promise of Balance",
                    spells : ["protection from evil and good"],
                    selection : ["protection from evil and good"],
                    times : 1,
                    firstCol : "oncelr"
                }]
            },
            "vow of law" : {
                name : "Vow of Law",
                description : desc([
                    "I learn the command spell."
                ]),
                spellcastingBonus : [{
                    name : "Vow of Law",
                    spells : ["command"],
                    selection : ["command"],
                    times : 1,
                    firstCol : "oncelr"
                }]
            },
            "oath of freedom" : {
                name : "Oath of Freedom",
                description : desc([
                    "I learn the longstrider spell."
                ]),
                spellcastingBonus : [{
                    name : "Oath of Freedom",
                    spells : ["longstrider"],
                    selection : ["longstrider"],
                    times : 1,
                    firstCol : "oncelr"
                }]
            },
            "pledge of protection" : {
                name : "Pledge of Protection",
                description : desc([
                    "I learn the shield of faith spell."
                ]),
                spellcastingBonus : [{
                    name : "Pledge of Protection",
                    spells : ["shield of faith"],
                    selection : ["shield of faith"],
                    times : 1,
                    firstCol : "oncelr"
                }]
            },
            "assurance of plight" : {
                name : "Assurance of Plight",
                description : desc([
                    "I learn the inflict wounds spell."
                ]),
                spellcastingBonus : [{
                    name : "Assurance of Plight",
                    spells : ["inflict wounds"],
                    selection : ["inflict wounds"],
                    times : 1,
                    firstCol : "oncelr"
                }]
            }
        },
        "subclassfeature14" : {
            name : "Teng Morphology",
            source : [["A:TLB", 7]],
            minlevel : 14,
            description : desc([
                "At 14th level, I gain the following:",
                "\u2022 My ability score cap increases by 2.",
                "\u2022 I gain an additional attunement slot.",
                '\u2022 I can cast my "Promise to the Fallen" spell at will.'
            ]),
            scoresMaximum : ["+2", "+2", "+2", "+2", "+2", "+2",]
        },
        "subclassfeature18" : {
            name : "Avatar of Ancestry",
            source : [["A:TLB", 7]],
            minlevel : 18,
            description : desc([
                "As a bonus action, I gain the following benefits for 1d4+1 rounds:",
                "\u2022 Each ability scores increases by 4.",
                "\u2022 I can cast of 4th level or lower without expending a spell slot.",
                "\u2022 My spell attacks have advantage.",
                "\u2022 Creatures have disadvantage on saving throws against my spells.",
                "Once I use this feature, I gain one point of exhaustion and can't use it again until I finish a long rest"
            ]),
            usages : 1,
            recovery : "long rest"
        }
    }
});

MagicItemsList["nightingale pendants"] = {
    name : "Nightingale Pendants",
    source : [["A:TLB", 17]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "These pendants have 10 charges, and regains 1d4+1 charges at dawn. I may expend a charge to ignore a spell's verbal and somatic components, two charges to cast darkness, pass without trace, or silence, and four charges to cast invisibility.",
    usages : 10,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Nightingale Pendants (2 charges)",
        spells : ["darkness", "pass without trace", "silence"],
        selection : ["darkness", "pass without trace", "silence"],
        times : 3,
        firstCol : 2
    },{
        name : "Nightingale Pendants (4 charges)",
        spells : ["invisibility"],
        selection : ["invisibility"],
        times : 1,
        firstCol : 4
    }],
    toNotesPage : [{
        name : "Nightingale Pendants",
        page3notes : true,
        note : desc(["I may expend 1 charge to ignore the verbal and somtic components of a spell."])
    }]
};

MagicItemsList["monocle of blindsight"] = {
    name : "Monocle of Blindsight",
    source : [["A:TLB", 18]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "I gain blindsight out to a range of 120ft with perfect clarity, but do not see color. Additionally, I have advantage on Perception checks relying on hearing and can cast scrying (DC 15) once per day. I lose the benefits, except spellcasting, if I am deafened or blinded.",
    vision : [
        ["Blindsight", 120],
        ["Keen Hearing"]
    ],
    spellcastingBonus : [{
        name : "Monocle of Blindsight",
        spells : ["scrying"],
        selection : ["scrying"],
        fixedDC : 15,
        times : 1
    }]
}

MagicItemsList["time's judgement"] = {
    name : "Time's Judgement",
    source : [["A:TLB", 18]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "Once per short rest, I can use my action to choose a creature within 60ft to make a DC 17 Charisma save or be on trial for 5 rounds. This fails if the creature is on a different plane, or if I die or fall unconscious.",
    descriptionFull : "Once per short rest, I can use my action to choose a creature within 60ft to make a DC 17 Charisma save or be on trial for 5 rounds. This fails if the creature is on a different plane, or if I die or fall unconscious.\n   " + toUni("Curse") + ". This item is cursed. When activating this item, there's a 5% chance that I will become the target instead of the designated creature.",
    toNotesPage : [{
        name : "Time's Judgement: Trial",
        page3notes : true,
        note : "Trial: While on trial, the creature takes 1d4+2 for every attack or damaging spell used. If the target is damaged 5 or more times by this, it must succeed a DC 17 Constitution saving throw or be stunned until the end of their next turn."
    }, {
        name : "Time's Judgement: Curse",
        page3notes : true,
        note : "Curse: This item is cursed. When activating this item, there's a 5% chance that I will become the target instead of the designated creature.",
        amendTo : "Time's Judgement: Trial"
    }],
    cursed : true,
    usages : 1,
    recovery : "short rest"
}

MagicItemsList["circlet of astronomy"] = {
    name : "Circlet of Astronomy",
    source : [["A:TLB", 19]],
    type : "wondrous item",
    rarity : "legendary",
    description : "I cannot be banished or transported to another plane against my will. Additionally, I can cast the following spells: banishment, conjure woodland beings, conjure minor elementals (5/day), conjure elemental, contact other plane, commune with nature (3/day), planar ally, conjure fey, plane shift (1/day). When I cast a spell, roll 1d20. On a 1, the circlet can no longer cast that spell ever again. Only a wish spell can restore the broken beads.",
    spellcastingBonus : [{
        name : "Circlet of Astronomy (5/day)",
        spells : ["banishment", "conjure woodland beings", "conjure minor elementals"],
        selection : ["banishment", "conjure woodland beings", "conjure minor elementals"],
        times : 3,
        firstCol : 5
    }, {
        name : "Circlet of Astronomy (3/day)",
        spells : ["conjure elemental", "contact other plane", "commune with nature"],
        selection : ["conjure elemental", "contact other plane", "commune with nature"],
        times : 3,
        firstCol : 3
    }, {
        name : "Circlet of Astronomy (1/day)",
        spells : ["planar ally", "conjure fey", "plane shift"],
        selection : ["planar ally", "conjure fey", "plane shift"],
        times : 3,
        firstCol : 1
    }],
    usages : 1,
    recovery : "dawn"
}

MagicItemsList["the last moonsilver"] = {
    name : "The Last Moonsilver",
    source : [["A:TLB", 20]],
    rarity : "artifact",
    type : "wondrous item",
    description : "see notes",
    toNotesPage : [{
        name : "The Last Moonsilver",
        note : desc([
            "I gain a +1 to all ability scores, or +2 if the moon is out. My crit range vs aberrations and lycanthropes becomes 17-20, unless its already less in which it increases by 1, and all weapon and unarmed attacks are considered silvered. I also gain the help of the Moonsilver Envoy.",
            "I can call the envoy as an action and lasts until I recall it or it's killed. If I recall it, I can summon it back with its remaing HP and resources. If it dies, I must finished a long rest before summoning it again. Regardless, it regains all lost HP and spent resources when I finish a long rest.",
            "The Moonsilver Envoy is a CR 11 legendary celestial, and is friendly with me unless I am collaborating with lycanthropes or aberrations."
        ])
    }], 
    scorestxt : "+1 to all ability scores, or +2 if moon is out",
    scores : [1, 1, 1, 1, 1, 1],
    attunement : true,
    creaturesAdd : [["Moonsilver Envoy", true]],
    creatureOptions : [{
        name : "Moonsilver Envoy",
        source : [["A:TLB", 21]],
        size : 2,
        type : "Celestial",
        alignment : "unaligned",
        ac : 16,
        hp : 114,
        hd : [17, 10],
        speed : "30 ft, fly 90 ft",
        scores : [15, 22, 16, 14, 20, 13],
        damage_resistances : "slashing, bludgeoning, piercing from non-magical attacks",
        damage_immunities : "radiant, cold",
        condition_immunities : "",
        senses : "darkvision 240 ft",
        passivePerception : 15, 
        languages : "understands Teng and Primeval, but doesn't speak",
        challengeRating : "11",
        proficiencyBonus : 4,
        attacksAction : 2,
        attacks : [{
            name : "Talons",
            baseWeapon : "unarmed strike",
            damage : [2,4, "radiant"],
            ability : 1,
            range : "Melee (5 ft)",
            abilitytodamage : true
        },{
            name : "Tail Swipe",
            damage : [2,6, "radiant"],
            baseWeapon : "unarmed strike",
            ability : 1,
            range : "Melee (15 ft)",
            description : "DC 18 Dexterity save or knocked prone",
            abilitytodamage : true
        }, {
            name : "Moonlight Breath (1/day)",
            damage : [8,10, "radiant"],
            description : "Save, 1/2 dmg; Failed, take dmg and lose all resistances; Special",
            special : true,
            tooltip : "Special: Lycanthropes and Aberrations have disadvantage on the save, and gain radiant; fire; piercing, slashing, and bludgeoning dmg from silvered weapons on failed save.",
            range : "30-ft cone",
            ability : 2,
        }],
        traits : [{
            name : "Hybrid Being",
            description : "The envoy is considered both a celestial and a dragon, and is affected by abilities that target either creature type."
        }, {
            name : "Moon Avatar",
            description : "If lowered to 0 hp, it returns to the amulet. The wearer must complete a long rest to summon it again."
        }],
        saves : ["", 10, 7, "", 9, ""],
        actions : [{
            name : "Multiattack",
            description : "The envoy makes two attacks with its talons and one with its tail swipe."
        }, {
            name : "Graceful Evasion",
            description : "The envoy adds 1d4+6 to its AC, but must see the attacker to do this."
        }],
        notes : [{
            name : "Destroying the Amulet",
            description : "After the envoy has been reduced to 0 hp, one must deal 114 force damage to the amulet to permanently destroy it."
        }]
    }]
};


FeatsList["philosopher"] = {
    name : "Philosopher",
    source : [["A:TLB", 32]],
    description : "My Intelligence, Wisdom, or Charisma increases by 1. Additionally, I gain proficiency with Insight and Persuasion, or expertise if already proficient.",
    scorestxt : "+1 Intelligence, Wisdom, or Charisma",
    skills : [
        ["Insight", "increment"],
        ["Persuasion", "increment"]
    ]
}

FeatsList["teng genius"] = {
    name : "Teng Genius",
    source : [["A:TLB", 32]],
    description : "My Intelligence increases by 1 up to a max of 20. I can calulcate trajectories, complex mathematics, and chemical reactions in my head. I have advantage on saving throws vs environmental hazards I can see and ability checks made to use arcane or scientific artifacts that I can inspect.",
    scores : [0,0,0,1,0,0],
    savetxt : { adv_vs : ["environmental hazards I can see", "ability checks to use scientific/arcane articats I can inspect"] }
}

FeatsList["inspired heart"] = {
    name : "Inspired Heart",
    source : [["A:TLB", 32]],
    description : "My Wisdom or Charisma increased by 1. When I witness a work of art for the first time, I can roll a DC 14 Insight check to gain Inspiration, or add 1d10 to an ability check, saving throw, or attack roll if my DM does not use this optional rule, and must use this before gaining another. I gain proficiency with one set of tools and instrument of my choice.",
    scorestxt : "+1 Wisdom or Charisma",
    toolProfs : [
        ["Any Tool or Instrument", 1]
    ]
}

FeatsList["improvised casting"] = {
    name : "Improvised Casting",
    source : [["A:TLB", 33]],
    prerequisite : "Being a wizard or artificer",
    prereqeval : function(v) { return (classes.known.wizard || classes.known.artificer) ? true : false},
    description : "My Intelligence increases by 1. When I cast a wizard or artificer spell, I can improve an aspect of the spell with the cost of another; see notes. Once I modify a spell, I cannot do so again until I finish a short or long rest.",
    usages : 1,
    recovery : "short rest",
    toNotesPage : [{
        name : "Improved Casting",
        note : desc([
            "I can improve one of the following aspects of the spell as the cost of another. I can double its range, duration, area of effect, or the amount of targets, but must select one of these categories and divide it by 2. A spell cannot be modified so it targets less than one creature, last for less than instantanous, or has a shorter range than touch.",
        ])
    }]
}

FeatsList["scion of promise"] = {
    name : "Scion of Promise",
    source : [["A:TLB", 33]],
    description : "The promise manifests an Echo as an action on my turn. The effects depends on my character level, and can only use each effect once over my existence. Levels 1-4: Mass Healing Word (+5 ability modifier), Levels 5-13: Planar Ally exists for 10 minutes, Levels 14+: Remake reality (similar to Cleric's Divine Intervention).",
    action : ["action", ""]
}

FeatsList["thoughts before action"] = { 
    name : "Thoughts Before Action",
    source : [["A:TLB", 33]],
    prerequisite : "Intelligence 13 or higher",
	prereqeval : function(v) { return Number(What("Int")) >= 13; },
    description : "My intelligence increases by 1. Additionally when I take one minute to analyze a course of action, I gain a bonus to the associated check equal to my Intelligence modifier.",
    scores : [0,0,0,1,0,0]
}

AddSubClass("paladin", "oath of eminence", {
    regExpSearch : /^(?=.*(eminence))(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
    subname : "Oath of Eminence",
    source : [["A:TLB", 36]],
    features : {
        "subclassfeature3" : {
            name : "Channel Divinity: Eminent Weapon",
            source : [["A:TLB", 36]],
            minlevel : 3,
            description : desc([
                "For the next minute, I can add my charisma modifier to hit with my weapon attacks.",
                "When I hit a creature with this weapon, the next attack or saving throw they make is reduced by 1d4. This effect does not stack."
            ]),
            calcChanges : {
                atkAdd : [
                    function(fields, v) {
                        if( !v.isDC && /eminent/i.test(v.WeaponTextName) ) {
                            fields.Description += (fields.Description ? '; ' : '') + "Crea -1d4 next atk/save"
                        }
                    },
                    "If I include 'eminent' as part of the weapon's name, the automation will treat it as an 'Eminent Weapon', granting its benefits.",
                ],
                atkCalc : [
                    function(fields, v, output) {
                        if( /eminent/i.test(v.WeaponTextName) ) {
                            output.extraHit += Number(What("Cha Mod")) > 0 ? Number(What("Cha Mod")) : 0;
                        }
                    }
                ]
            },
            spellcastingExtra : ["bane", "protection from evil good", "borrowed knowledge", "hold person", "speak with dead", "hypnotic pattern", "locate creature", "banishment", "arcane hand", "dominate person"]
        },
        "subclassfeature3.1" : {
            name : "Channel Divinity: Regal Presence",
            source : [["A:TLB", 36]],
            minlevel : 3,
            description : desc([
                "I can choose up to four allies within 30 ft of me. They gain a 1d6 bonus to their next attack or saving throw.",
                "Additionally, they gain temporary hit points equal to my Prof. Bonus + my Charisma modifier. This lasts until the end of my next turn."
            ]),
            additional : levels.map(function(n) {
                if(n < 3) return "";
                return "+1d6"
            }),
        },
        "subclassfeature7" : {
            name : "Amaranth Aura",
            source : [["A:TLB", 36]],
            minlevel : 7,
            description : desc([
                "When a creature within range targets only me with an attack or harmful spell, it must make a Charisma saving throw. On a failure, they are incapacitated until the end of their next turn. A creature that succeeds or when the effect ends is immune to this until they finish a long rest. This feature isn't triggered by area of effect spells.",
                "Additionally at 18th level, a creature that has become immune to my Regal Presence ability, can be affected by it again."
            ]),
            additional : levels.map(function(n) { return n < 7 ? "" : (n < 18 ? 15 : 30) + "-foot aura"; }),
        },
        "subclassfeature15" : {
            name : "Magic Resistance",
            source : [["A:TLB", 36]],
            minlevel : 15,
            description : desc([
                "I gain advantage on saving throws vs spells and other magical effects."
            ]),
            savetxt : { adv_vs : ["spells and other magical effects"]}
        },
        "subclassfeature20" : {
            name : "Eminent Soul",
            source : [["A:TLB", 36]],
            minlevel : 20,
            description : desc([
                "I can use my action to call upon the power of my ancestry. For the next minute, I gain one of the following benefits:",
                "\u2022 Limited Magic Immunity: I cannot be affected or detected by spells of 6th level or lower",
                "\u2022 Eminent Protection: I become resistant to one of the following damage types: fire, cold, thunder, lightning, and poison",
                "\u2022 Breach Space: Once per turn, I can use my bonus action to teleport to an unoccupied space within 30 ft",
                "\u2022 Antimagic Smite: Whenever I hit a creature with my Divine Smite, any spells the creature was concentrating on ends, as well as any ongoing magical effects."
            ])
        }
    }
})

MagicItemsList["senatorial cloak"] = {
    name : "Senatorial Cloak",
    source : [["A:TLB", 38]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "My AC becomes 13 + Dex. For 10 minutes once per short rest, I gain a hover speed equal to my walk speed. I can also cast the Thaumaturgy cantrip. Additionally, I gain a +2 to Persuasion and Intimidation checks.",
    armorAdd : ["Senatorial Cloak"],
    armorOptions : [{
        regExpSearch : /senatorial cloak/,
        name : "Senatorial Cloak",
        source : [["A:TLB", 38]],
        ac : 13,
        affectsWildShape : true
    }],
    usages : 1,
    recovery : "short rest",
    specllcastingBonus : [{
        name : "Senatorial Cloak",
        spells : ["thaumaturgy"],
        selection : ["thaumaturgy"],
        times : 1
    }]
}

MagicItemsList["maul of construct turning"] = {
    name : "Maul of Construct Turning",
    source : [["A:TLB", 38]],
    type : "weapon (maul)",
    rarity : "very rare",
    attunement : true,
    description : "I have a +2 to damage and attack rolls made with this maul. When I hit a construct, they take an additional 1d8 lightning damage and must succeed a DC 14 Consitution saving throw or be Incapacitated until the end of their next turn. If I am a Cleric, I can use my Turn Undead to target constructs instead of undead.",
    weaponOptions : [{
        regExpSearch : /^(?=.*maul)(?=.*construct)(?=.*turning).*$/i,
        name : "Maul of Construct Turning",
        baseWeapon : "maul",
        description : "Heavy, two-handed; +1d8 lightning dmg to Constructs",
        modifiers : [2,2],
        selectNow : true
    }],
    choices : ["Cleric", "Not a Cleric"],
    selfChoosing : function() {
        if(classes.known.cleric) return "cleric";
        if(!classes.known.cleric) return "not a cleric";
    },
    "cleric" : {
        name : "Maul of Construct Turning (Cleric)",
        description : "I have a +2 to damage and attack rolls made with this maul. When I hit a construct, they take an additional 1d8 lightning damage and must succeed a DC 14 Consitution saving throw or be Incapacitated until the end of their next turn. Additionally, I can use my Turn Undead to target constructs instead of undead."
    },
    "not a cleric" : {
        name : "Maul of Construct Turning (Not a Cleric)",
        descrtipion : "I have a +2 to damage and attack rolls made with this maul. When I hit a construct, they take an additional 1d8 lightning damage and must succeed a DC 14 Consitution saving throw or be Incapacitated until the end of their next turn."
    }
}

MagicItemsList["clockwork needle"] = {
    name : "Clockwork Needle",
    source : [["A:TLB", 39]],
    type : "wondrous item",
    rarity : "common",
    attunement : false,
    description : "Three times per day, I can mend damage to a construct within 5 ft of me. The needle restors 2d8+5 to the construct. Additionally, I can make an improvised weapon attack to organic creatures. On a hit, it deals 3d8+5 piercing damage and the needle breaks.",
    weaponOptions : [{
        regExpSearch : /clockwork needle/i,
        name : "Clockwork Needle",
        source : [["A:TLB", 39]],
        type : "Improvised Weapon",
        description : "Construct heals 2d8+5; Breaks after attacking a creature",
        damage : [3, 8, "piercing"],
        selectNow : true
    }],
    usages : 3,
    recovery : "dawn"
}

MagicItemsList["gloves of performance"] = { 
    name : "Gloves of Performance",
    source : [["A:TLB", 39]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "When I speak of imagery, an illusion of it will appear in front of me. I gain advantage on performance, persuasion, and deception checks, and if I am proficient with any of these skills, I gain expertise instead. Additionally, I can cast major image at will.",
    skills : [
        ["Performance", "only"],
        ["Persuasion", "only"],
        ["Deception", "only"]
    ],
    spellcastingBonus : [{
        name : "Gloves of Performance",
        spells : ["major image"],
        selection : ["major image"],
        firstCol : "atwill"
    }]
}

MagicItemsList["mask of the platinum owl"] = {
    name : "Mask of the Platinum Owl",
    source : [["A:TLB", 39]],
    type : "wondrous item",
    rarity : "legendary",
    atunement : true,
    description : "My Wisdom increases by 2 to a max of 23, and I gain truesight with a range of 30 ft. If I am an 11th level druid or higher, I gain additional benefits found on the notes page.",
    vision : [["Truesight", 30]],
    choices : ["Druid", "Not a Druid"],
    selfChoosing : function() {
        if(classes.known.druid) return "druid";
        if(!classes.known.druid) return "not a druid";
    },
    "druid" : {
        name : "Mask of the Platinum Owl (Druid)",
        description : "My Wisdom increases by 2 to a max of 23, and I gain truesight with a range of 30 ft. If I am an 11th level druid or higher, I gain additional benefits found on the notes page.",
        toNotesPage : [{
            name : "Mask of the Platinum Owl: Druid Option",
            note : desc([
                "If I am an 11th level or higher druid, I unlocked the masks power to Wild Shape into a Giant Platinum Owl. This is a greater version of the Giant Owl, and has the following statistics",
                "\u2022 Ancient Constitution: The owl has 77 (9d10+27) hitpoints, an AC of 15, Constitution of 16, Wisdom of 18, Dexterity of 20, and truesight out to a range of 60 ft instead of the Giant Owl's normal statistics.",
                "\u2022 Blessing of Knowledge: The owl can understand and speak all languages, and has advantage on rolls made to understand coded messages and other extraneous script.",
                "\u2022 Paralyzing Breath (Recharge 6): The owl exhales gas in a 15-ft cone. Each creature must make DC 14 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns."
            ])
        }],
    },
    "not a druid" : {
        name : "Mask of the Platinum Owl (Not a Druid)",
        description : "My Wisdom increases by 2 to a max of 23, and I gain truesight with a range of 30 ft."
    },
    scores : [0,0,0,0,2,0],
    scoresMaximum : [0,0,0,0,23,0]
}

CreatureList["giant platinum owl"] = {
    companion : ["ariadne's: the last bastion codex", "ariadne's companion codex"],
    name : "Giant Platinum Owl",
    source : [["A:TLB", 39]],
    size : 4,
    type : "Beast",
    alignment : "Neutral",
    ac : 15,
    hp : 77,
    hd : [9, 10],
    speed : "5 ft, fly 60 ft",
    scores : [13, 20, 16, 8, 18, 10],
    skills : {
        "perception" : 8,
        "stealth" : 7
    },
    senses : "Darkvision 120ft, Adv. on Wis (Perception) checks using sight/hearing",
    passivePerception : 23,
    languages : "Can understand and speak all languages",
    challengeRating : "1/4",
    proficiencyBonus : 2,
    attacksAction : 1,
    attacks : [{
		name : "Talons",
		ability : 1,
		damage : [2, 6, "slashing"],
		range : "Melee (5 ft)"
	}, {
        name : "Paralyzing Breath (recharge 6)",
        ability : 3,
        damage : ["", "", ""],
        range : "15-ft cone",
        description : "Save or paralyzed for 1 min; Save again at end of each turn",
        dc : true,
    }],
    traits : [{
        name : "Flyby",
        description : "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
    }, {
        name : "Blessing of Knowledge",
        description : "The owl can understand and speak all languages. Additionally, it has advantage on rolls made to understand coded messages and other extraneous script."
    }],
}

SpellsList["activate"] = {
    name : "Activate",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLB", 40]],
    level : 2,
    school : "Trans",
    time : "1 a",
    range : "Touch", 
    duration : "Instantaneous",
    components : "S,M",
    compMaterial : "a shard of conductive metal",
    description : "Spell ability check, DC 13+3/tier above common; Activate for 1 use or spend any amount of charges; +5 DC to do again; DC 30 is impossible",
    descriptionShorter : "Spell ability check +2/SL bonus, DC 13+3/tier above common; activates for 1 use or expends charges; +5 DC on subsequent attempts (max of 30)",
    descriptionFull : "I can use my own prana to fuel the functioning of a depleted magical item or arcane mechanism. I must make a spellcasting ability check with a DC of 10 + 3 for every tier rarity above common in the case of a magical item, or a DC up to the DM's discretion in case of a mechanism. On a success, I momentarily reactivate the item or mechanism, enough to use it once before it goes back to its dormant state. If an item has charges, I can any amount of charges regardless of its actual charge. Once deactivated, any additional attempts on the same object increases the DC by 5. If the DC becomes over 30, it becomes impossible." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, I gain a bonus of +2 to the roll for each slot above 2nd, up to a maximum of +6."
}

SpellsList["pragmatism"] = {
    name : "Pragmatism",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLB", 40]],
    level : 4,
    school : "Ench",
    time : "1 a",
    range : "Self",
    duration : "Conc, 1 min",
    components : "S,M",
    compMaterial : "a black, tough stone",
    description : "Immune to charmed/frightened; adv. vs Wisdom/Charisma saves; resistance to Psycic dmg; disadv. vs pers., decep., and perf. checks",
    descriptionFull : "I magically temper my mind against the influence of emotion, becoming purely logical. I retain my alignment and principles, but follow my nature with ruthless abandon of feelings and empathy of any sort. I am immune to being charmed or frightened and have advantage on Intelligence, Wisdom, and Charisma saving throws. Additionally, I gain resistance to psychic damage. While under this spells effects, relating to others is not my strong suit. I have disadvantage on persuasion, deception, and performance checks."
}

SpellsList["zephrahim’s purple orb"] = {
    name : "Zephrahim’s Purple Orb",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLB", 41]],
    level : 6,
    school : "Evoc",
    time : "1 a",
    range : "60 ft",
    duration : "Conc, 1 min",
    components : "V,S,M",
    compMaterial : "a round carved amethyst",
    save : "Con",
    description : "Spell atk 1 crea 2d12 Force dmg; Action on subsequent turns double dice (4d12, 8d12)/SL 9 quadruple dice, up to 3 turns and Con save after dmg or stunned",
    descriptionFull : "I create an orb of pulsing violet energy and launch it at a creature I can see within range, making a range spell attack. On a hit, the target takes 2d12 force damage and the orb reverberates violently within them. On subsequent turns, I can use my action to deal the damage again, but its double each time: 4d12 the second time it hits, and 8d12 the third time. Once I deal damage with this spell 3 times, the reverberations reach their limit before disapating. After taking this damage, the target must succeed on a Constitution saving throw or be stunned until the end of their next turn." + AtHigherLevels + "When I cast this spell with a spell slot of 9th level, the initial damage is doubled."
}

SpellsList["tesla field"] = {
    name : "Tesla Field",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLB", 41]],
    level : 8,
    school : "Evoc",
    time : "1 a",
    range : "120 ft",
    duration : "Conc, 1 min",
    components : "V,S,M",
    save : "Con",
    compMaterial : "a fulgurite worth at least 1000 gp",
    description : "30ft rad sphere; dif. ter. vs crea wear metal; save on enter or start in area, 6d8 lightning and stunned (repeat save at start of turn); save halves and no stunned; bon. action move 10ft",
    descriptionFull : "I create a 30ft radius sphere of crackling, fulgurating energy centered on a point I choose within range. This electricity spreads around corners. The area becomes difficult terrain for creatures wearing metallic armor. When the creature enters the spells area for the first time or starts its turn in it, the creature must make a Constitution saving throw taking 6d8 lightning damage and stunned, or taking half as much damage and not stunned on a success. A creature can repeat the saving throw at the start of each of its turns. On subsequent turns, I can use my bonus action to move the field up to 10 ft in a direction I choose."
}

SpellsList["power word: open"] = {
    name : "Power Word: Open",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLB", 41]],
    level : 9,
    school : "Omni",
    time : "1 a",
    range : "unlimited",
    duration : "1 hr",
    components : "V",
    description : "Whatever is in my path opens up, seas and rivers part, magical locks dispelled, hills and mountains crack forming tunnels, planar gates open regardless of its owner's wishes, etc."
}

MagicItemsList["mage breaker"] = {
    name : "Mage Breaker",
    source : [["A:TLB", 63]],
    type : "weapon (any)",
    rarity : "legendary",
    attunement : true,
    description : "Attacks made with this weapon deals an additional 3d6 force damage. If a creature hit with this is concentrating on a spell of 6th level or lower, it automatically loses concentration.",
    chooseGear : {
        type : "weapon",
        prefixOrSuffix : "suffix",
        descriptionChange : ["replace", "weapon"],
    },
    calcChanges : {
        atkAdd : [
            function(fields, v) {
                if(!v.theWea.isMagicWeapon && (/mage breaker/i).test(v.WeaponTextName)) {
                    v.theWea.isMagicWeapon = true;
                    fields.Description = fields.Description.replace(/(, |; )?Counts as magical/i, '');
					fields.Description += (fields.Description ? '; ' : '') + '+3d6 force dmg';
                }
            }
        ]
    }
}

MagicItemsList["red plate of the praetorian"] = {
    name : "Red Plate of the Praetorian",
    source : [["A:TLB", 63]],
    type : "armor (plate)",
    rarity : "legendary",
    attunement :  true,
    description : "While attuned, my AC is 20. I gain additional benefits found on the notes page.",
    toNotesPage : [{    
        name : "Red Plate of the Praetorian: Features",
        note : desc([
            "While wearing the armor and while its active, I have adv. on saves vs. spells and magical effects, all critical hits become normal hits, I reduce all damage except for psychic by 4, I am always under the effects of the spider climb spell, and I can use my bonus action to perform an assisted jump (see below). Additionally, once per long rest I get a legendary resistance, but once I use it, I lose the benefits of the armor until I finish a long rest.",
            "\u2022 Assisted Jump: I can use my bonus action to jump up to 45 ft. If I land on a creature that is Large or smaller, the creature must make a DC 18 Dexterity saving throw or be knocked prone and take 3d6+5 bludgeoning damage."
        ])
    }],
    armorAdd : "Red Plate of the Praetorian",
    armorOptions : [{
        regExpSearch : /red plate of the praetorian/i,
        name : "Red Plate of the Praetorian",
        source : [["A:TLB", 63]],
        type : "heavy",
        ac : 20,
        stealthdis : true,
        addMod : false,
        isMagicArmor : true,
        strReq : 15,
        weight : 20
    }],
    action : ["bonus action", "Assisted Jump"],
    limfeaname : "Legendary Resistance",
    usages : 1,
    recovery : "long rest"
}

FeatsList["combat doctrine"] = {
    name : "Combat Doctrine",
    source : [["A:TLB", 64]],
    description : "At the start of each of my turns, I can choose one of the following combat doctrines found on the notes page.",
    toNotesPage : [{
        name : "Combat Doctrines",
        note : desc([
            "\u2022 Coherency: Choose an ally within 10 ft. While within 10 ft of that ally, we both gain a +1 to our AC's",
            "\u2022 Press the Attack: I gain advantage on attack rolls against a creature if at least one of my allies is within 5 ft of that creature. Additionally, if an ally and I are within 10 ft of each other are attacking the same creature and we both have advantage on the attack, 19-20 on the attack roll is considered a critical hit.",
            "\u2022 Leadership: If an ally within 60 ft of me makes a Wisdom saving throw, they can use my Wisdom modifier instead of their own.",
            "\u2022 Coordinated Fire: When I make a ranged attack against a creature that has been hit with a ranged attack from one of my ally's within the last round, I deal an additional 3 damage on a hit. This can only trigger once per turn.",
            "\u2022 Tactical Movement: Choose an ally within 10 ft. The ally and I gain 15 ft of movement if we start our turns 10 ft of each other.",
        ])
    }],
    usages : 1,
    recovery : "Turn"
}

FeatsList["executioner"] = {
    name : "Executioner",
    source : [["A:TLB", 64]],
    description : "I gain a +1 to Strength or Dexterity. Additionally, when I reduce a creature with a CR of up to half of my character level (rounded down) to 0 hp on my turn, I can immediately take another action. After using this feature, I must finish a long rest before using it again.",
    scorestxt : "+1 to Str or Dex",
    usages : 1,
    recovery : "long rest",
}

FeatsList["stalwart"] = {
    name : "Stalwart",
    source : [["A:TLB", 64]],
    description : "I gain a +1 to Constitution. As a bonus action, I can enter the Stalwart state for 1 minute in which I reduce all damage except psyhic equal to my Prof. bon. After which all damage I reduced, is dealt to me equally over 10 rounds. I cannot be killed this way, only knocked unconscious. I can use this once per short rest.",
    usages : 1,
    recovery : "short rest",
    scores : [0, 0, 1, 0, 0, 0]
}

SpellsList["alchemize"] = {
    name : "Alchemize",
    source : [["A:TLB", 86]],
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    level : 0,
    school : "Trans",
    time : "1 min",
    range : "Touch",
    duration : "Instantaneous",
    components : "S,M",
    compMaterial : "pouches and vials to store the resulting contents in",
    description : "1 small non-magical obj revert to raw material; used to make other obj, must have tool prof. if complex"
}

SpellsList["fulgurating smite"] = { 
    name : "Fulgurating Smite",
    source : [["A:TLB", 86]],
    classes : ["paladin"],
    level : 3,
    school : "Evoc",
    time : "1 bns",
    range : "Self",
    duration : "Conc, 1 min",
    components : "V,S,M",
    compMaterial : "a shard of fulgurite",
    save : "Con",
    description : "Next weapon attack deals 3d6+1d6/SL lightning dmg; if crea, save or incapacitated until end of their next turn"
}

SpellsList["theophrastus' bodily chaos"]= {
    name : "Theophrastus' Bodily Chaos",
    source : [["A:TLB", 86]],
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    level : 4,
    school : "Trans",
    time : "1 a",
    range : "Touch",
    duration : "Conc, 1 min",
    components : "S,M",
    compMaterial : "a vial filled with a chaotic chemical reactives, which the spell consumes",
    description : "Melee spell atk against crea, swapping 2 of the targets ability scores"
}

SpellsList["entropy of teng"] = {
    name : "Entrop of Teng",
    source : [["A:TLB", 86]],
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    level : 9,
    school : "Trans",
    time : "1 a",
    range : "Touch",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "a radioactive ingot worth at least 10,000 gp, which the spell consumes",
    description : "Melee spell atk against crea or obj; takes 40d10, save halves; reduced to 0 kills instantly"
}

/*

    THE TECTONIC NETHERDEPTHS

*/

SourceList["A:TTN"] = {
    name : "Ariadne's: The Tectonic Netherdepths",
    abbreviation : "A:TTN",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/05/7"
}

MagicItemsList["irradiated ammunition"] = {
    name : "Irradiated Ammunition",
    source : [["A:TTN", 11]],
    type : "weapon (ammunition)",
    rarity : "uncommon",
    attunement : false,
    description : "A hit creature must make a DC 13 (+1 DC per lodged bullet) Constitution saving throw when it finishes a long rest or gain 1 level of exhaustion and lose 5 hp from its hp max. DC 13 Medicine or Sleight of Hand check to remove the bullet using surgeon's tools. Improvised tools roll with disadv. taking 2d4 slashing on a fail."
}

MagicItemsList["ring of aberrant reflexes"] = {
    name : "Ring of Aberrant Reflexes",
    source : [["A:TTN", 11]],
    type : "ring",
    rarity : "very rare",
    attunement : true,
    description : "I can use my reaction to take half damage when I am hit by an attack, and do not need to see the attacker to do so. If I have a similar feature already, I take no damage instead. I also gain Evasion if I don't already have it. This ring is also cursed; see notes.",
    toNotesPage : [{
        name : "Ring of Aberrant Reflexes: Curse",
        note : desc([
            "Whenever I use my this rings' reaction to take half damage, I must make a DC 10 Intelligence saving throw. On a failed save, I take 3d6 psychic damage as the ring burrows deeper and the save DC for subsequent saves is increased by 3.",
            "When I fail a second time, I take 5d6 psychic damage and become unable to remove the ring by normal means. I can remove this ring if the Remove Curse spell is casted at 5th level or higher.",
            "If I fail a third time, an evil alien intelligence takes over my mind, fully controlling me until someone takes the ring off my finger. If the ring is removed, it will refuse to attune to me again."
        ])
    }],
    action : [["reaction", "Aberrant Reflexes"], ["reaction", "Evasion"]],
    savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
}

MagicItemsList["crackling gravity bomb"] = {
    name : "Crackling Gravity Bomb",
    source : [["A:TTN", 12]],
    attunement : false,
    type : "adventuring gear (bomb)",
    rarity : "rare",
    description : "As an action, I can remove this grenade's cap and throw it at a point up to 60 ft away. Each creature within 15 ft must make a DC 15 Strength saving throw, taking 4d6 lightning damage and 4d6 force damage, and knocked prone, or half as much on a save and not knocked prone.",
}

MagicItemsList["arkan's tyranny"] = {
    name : "Arkan's Tyranny",
    source : [["A:TTN", 12]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true,
    fixedDC : 17,
    description : "I gain a +3 bonus to unarmed attack and damage rolls. I deal an additional 1d8 psychic damage on a hit. I can cast the following spells (DC 17). At will: hold person, suggestion, zone of truth. 3/day each: dominate person, hold monster. 1/day each: dominate monster",
    spellcastingBonus : [{
        name : "Arkan's Tyranny (at will)",
        spells : ["hold person", "suggestion", "zone of truth"],
        selection : ["hold person", "suggestion", "zone of truth"],
        times : 3,
        firstCol : "atwill"
    },{
       name : "Arkan's Tyranny (3/day)",
       spells : ["dominate person", "hold monster"],
       selection : ["dominate person", "hold monster"],
       times : 2,
       firstCol : 3
    },{
       name : "Arkan's Tyranny (1/day)",
       spells : ["dominate monster"],
       selection : ["dominate monster"],
       times : 1,
       firstCol : 1
    }],
    calcChanges : {
        atkAdd : [
            function(fields, v) {
                if((v.baseWeaponName == "unarmed strike")) {
                    fields.Description += (fields.Description ? '; ' : '') + '+1d8 psychic dmg';
                }
            },
            "I deal an additional 1d8 psychic damage on a hit",
            700
        ],
        atkCalc : [
            function(fields, v, output) {
                if (v.baseWeaponName === "unarmed strike") {
					output.magic += 3;
				}
            },
            ''
        ]
    }
}

MagicItemsList["rip's risible reaper"] = { //there is no official "scythe" using sickle instead
    name : "Rip's Risible Reaper",
    source : [["A:TTN", 12]],
    type : "weapon (sickle)",
    rarity : "very rare",
    description : "I have a +2 to hit and damage rolls made with this sickle. Additionally it has 5 charges, regaining 1d4+1 at dawn. When I hit a creature, I can expend a charge and they must succeed a DC 15 Wisdom saving throw or take 2d6 psychic damage and be under the effects of the Hideous Laughter spell until the end of their next turn.",
    usages : 5,
    recovery : "dawn",
    weaponOptions : [{
        name : "Rip's Risible Reaper",
        regExpSearch : /rip's risible reaper/i,
        source : [["A:TTN", 12]],
        baseWeapon : "sickle",
        modifiers : [2,2],
        selectNow : true
    }]
}

AddWarlockInvocation("Revealing Blast (prereq: Eldritch Blast)", {
    name : "Revealing Blast",
    description : desc(["When I hit a creature with my eldritch blast, they are revealed until the end of their next turn. While revealed a creature cannot benefit from being invisible, is returned to its true form if its shapeshifted, and attacks against it hit critically on a 19-20. This condition does not dispel magic, justs put them on hold until the condition is lost."]),
    source : [["A:TTN", 15]],
    submenu : "[improves Eldritch Blast]",
    prereqeval : function(v) { return isSpellUsed('eldritch blast', true); }
})

AddWarlockInvocation("Darkness Within (prereq: level 5 warlock)", {
    name : "Darkness Within",
    description : desc([
        "Once per long rest when I am reduced to 0 hp, creatures within 15 ft when this invocation activates must make a Constitution saving throw against my spell save DC or take 1d12 necrotic damage. If at least one creature fails, I heal for the amount of damage dealt instead of falling unconscious."
    ]),
    source : [["A:TTN", 15]],
    submenu : "[warlock level  5+]",
    usages : 1,
    recovery : "long rest",
    prereqeval : function(v) { return classes.known.warlock.level >= 5; }
})


AddWarlockInvocation("Pact-Warded Mind (prereq: level 7 warlock)", {
    name : "Pact-Warded Mind",
    description : desc([
        "When I force a creature to make an Intelligence or Wisom saving throw, I can change it to a Charisma saving throw instead."
    ]),
    source : [["A:TTN", 15]],
    submenu : "[warlock level 7+]",
    usages : 3,
    recovery : "long rest",
    prereqeval : function(v) { return classes.known.warlock.level >= 7; }
})

AddWarlockInvocation("Greater Telepath (prereq: level 15 warlock, the Great Old One patron)", {
    name : "Greater Telepath",
    description : desc([
        "My telepath from my Awakened Mind feature increases to 120 ft and I can cast the command spell at will against creautres within my telepathy range."
    ]),
    source : [["A:TTN", 15]],
    submenu : "[warlock level 15+]",
    spellcastingBonus : [{
        name : "Command",
        spells : ["command"],
        selection : ["command"],
        times : 1,
        firstCol : "atwill"
    }],
    spellChanges : {
        "command" : {
            range : "120 ft", 
            changes : "I can cast this at a range equal to my Awakened Mind feature and doing so at will."
        }
    },
    prereqeval : function(v) { return classes.known.warlock.level >= 15 && (/great old one/).test(classes.known.warlock.subclass); }
})

FeatsList["sixth sense"] = {
    name : "Sixth Sense",
    source : [["A:TTN", 16]],
    prerequisite : "requires the Alert feat",
    description : desc([
        "I gain a +1 to Dexterity or Intelligence, I can add my Intelligence mod to Initiative rolls, even if I have another similar ability or feature, and I have a few seconds to prepare when I sense unseen imminent danger."
    ]),
    addMod : { type : "skill", field : "Init", mod : "max(Int|0)", text : "I can add my Intelligence modifier to my initiative rolls." },
    scorestxt : "+1 Dex or Int",
    prereqeval : function(v) { return CurrentFeats.known.indexOf("alert") !== -1;}
}

FeatsList["defensive acrobat"] = {
    name : "Defensive Acrobat",
    source : [["A:TTN", 16]],
    description : "I gain a +1 to Dexterity. Once per turn when I am hit by an attack, I can use my reaction to roll an Acrobatics check. If my roll is higher than the attack roll, the attack misses.",
    scores : [0, 1, 0, 0, 0, 0],
    action : ["reaction", ""]
}

FeatsList["light armor master"] = {
    name : "Light Armor Master",
    source : [["A:TTN", 16]],
    prerequisite : "requires light armor proficiency",
    description : "I gain a +2 to Dexterity saving throws while wearing light armor. When I succeed a Dexterity saving throw or an attack misses me, I can use my reaction to dodge and move up to 15 ft in a direction of my choosing.",
    prereqeval : function(v) { return v.lightArmorProf; },
    action : ["reaction", "Dodge (move 15 ft)"]
}

FeatsList["crushing might"] = {
    name : "Crushing Might",
    source : [["A:TTN", 16]],
    prerequisite : "requires heavy armor proficiency",
    prereqeval : function(v) { return v.heavyArmorProf; },
    description : "Once per turn while I am wearing heavy armor, I can sacrifice 15 ft of movement to turn a melee attack into a crushing strike. Crushing strikes have a bonus to hit and damage rolls equal to half my AC, rounded down. Benefits to AC from shields, spells, and other means are ignored when calculating these bonuses.",
    usages : 1,
    recovery : "Turn"
}

MagicItemsList["mysterious teng tablet"] = {
    name : "Mysterious Teng Tablet",
    type : "wondrous item",
    rarity : "artifact",
    source : [["A:TTN", 18]],
    description : "This tablet opens doors within the ancient Teng complex, and is bound to whoever picks it up. A character attuned to this item is under the effects of the Gaze of Arkan Curse. See notes",
    toNotesPage : [{
        name : "Mysterious Teng Tablet",
        note : desc([
            "This mysterious tablet hides faint echoes of primal magic within its glowing green runes. A creature attuned to this tablet can transfer ownership to another willing creature over the course of a short rest. A creature attuned also suffers from the Gaze of Arkan curse found below.",
            "A remove curse spell can momentarily stop the curse for one hour, with an additional hour for each spell slot used above 3rd. If the tablet is kept within a lead container, the Gaze of Arkan becomes less powerful, ignoring the last 2 effects from the Gaze of Arkan curse."
        ])
    }, {
        name : "Gaze of Arkan Curse",
        note : desc([
            "The gaze of the Arkan Group is focused on whichever creature holds the Mysterious Teng Tablet. The creature is Revealed and cannot turn invisible by any means nor gain the benefits of the Nondetection spell or similar effects. For as long as the creature carries the tablet:",
            "\u2022 Arkan enforcers and operatives know the general location of the creature",
            "\u2022 Masked Ones of Arkan know the precise location of the creature and can use their action to cast the Scrying spell once per long rest on the creature",
            "\u2022 After a long rest, the creature must succeed a DC 13 Wisdom saving throw or gain one point of exhaustion",
            "\u2022 When creatures of Arkan are within 500 ft, the character's eyes begin to glow red.",
            "The Arkan Group will hunt whoever is in possession of the tablet until they recover the item. "
        ])
    }]
}

MagicItemsList["pendant of the star guardian"] = {
    name : "Pendant of the Star Guardian", 
    source : [["A:TTN", 25]],
    rarity : "very rare",
    type : "wondrous item",
    attunement : true,
    spellcastingAbility : "class", // does not specify what type of ability it uses for range spell attack
    description : "I gain the Guidance cantrip and proficiency in Arcana, or expertise if proficient. As an action, 4 motes of starlight appear to orbit my head, shining (30ft) bright and (30ft) dim light. As a bonus action (1/LR), I make a ranged spell attack vs. a target within 60ft, dealing 4d6 radiant damage and revealed until the end of its next turn.",
    spellcastingBonus : [{
        name : "Guidance",
        spells : ["guidance"],
        selection : ["guidance"],
        times : 1,
    }],
    skills : [
        ["Arcana", "increment"]
    ],
    action : [["action", "Create Starlight (4 motes)"], ["bonus action", "Launch Starlight (60ft)"]],
    limfeaname : "Launch Starlight",
    usages : 1,
    recovery : "long rest",
    skills : [["Arcana", "increment"]]
}

MagicItemsList["trotters of speedy delivery"] = {
    name : "Trotters of Speedy Delivery",
    source : [["A:TTN", 25]],
    rarity : "very rare",
    type : "wondrous item",
    attunement : true,
    description : "I can deliver a package to anywhere on the material plane within 24 hours, gain the Message cantrip, and my movement speed increases by 10ft. As a bonus action (1/LR), I trace a path to an ally within 120 ft. I can use my full movement to traverse the distance between us regardless of obstacles. This ends if we are more than 120 ft away from each other.",
    usages : 1,
    recovery : "long rest",
    action : ["bonus action", "Incoming Delivery"],
    speed : { allModes : "+10"},
    spellcastingBonus : [{
        name : "Message",
        spells : ["message"],
        selection : ["message"],
        times : 1,
    }],
}

MagicItemsList["spellbook of brilliant incantations"] = {
    name : "Spellbook of Brilliant Incantations",
    source : [["A:TTN", 26]],
    type : "wondrous item",
    rarity : "very rare",
    description : "If I am a wizard, I can add the following spells to my wizard spellbook by spending the required materials or using this as my own spellbook. If I am a cleric, these spells are considered to be always prepared. Each of these spells from the spellbook can be torn out of the book to be used as spell scrolls. If all pages are torn out, then this spellbook becomes nonmagical. (Command, Shield of Faith, Aid, Prayer of Healing, Revivify, and Death Ward)",
    choices : ["Wizard", "Cleric", "Not a Wizard or Cleric"],
    selfChoosing : function() {
        if(classes.known.wizard) return "wizard";
        if(classes.known.cleric) return "cleric";
        return "not a wizard or cleric";
    },
    "wizard" : {
        name : "Spellbook of Brilliant Incantations (Wizard)",
        description : "I can add the following spells to my wizard spellbook by spending the required materials or using this as my own spellbook. Each page can be torn out to be used as a spell scroll. If all pages are torn out, this book becomes nonmagical. (Command, Shield of Faith, Aid, Prayer of Healing, Revivify, and Death Ward)",
        spellcastingBonusElsewhere : {
            addTo : "wizard",
            spellcastingBonus : [{
                name : "Spellbook of Brilliant Incantations", // these are not wizard spells
                spells : ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"],
                selection : ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"],
                times : 6
            }] 
        }
    },
    "cleric" : {
        name : "Spellbook of Brilliant Incantations (Cleric)",
        description : "These spells are considered to be always prepared on my cleric spell list. Each of these spells from the spellbook can be torn out of the book to be used as spell scrolls. If all pages are torn out, then this spellbook becomes nonmagical. (Command, Shield of Faith, Aid, Prayer of Healing, Revivify, and Death Ward)",
        calcChanges : {
            spellAdd : [
                function(spellKey, spellObj, spName) {
                    // these spells are already part of the cleric spell list
                    var list = ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"];
                    // return if this is not the cleric spell list
                    if(spName !== "cleric") return;
                    for(var i = 0; i < list.length; i++) {
                        // only apply this to the listed spells
                        if(list[i] === spellKey && spellObj.firstCol !== "markedbox") {
                            spellObj.firstCol = "markedbox"
                        }
                    }
                }
            ]
        }
    },
    "not a wizard or cleric" : {
        name : "Spellbook of Brilliant Incantations (Not a Wizard or Cleric)",
        description : "Each of these spells from the spellbook can be torn out of the book to be used as spell scrolls. If all pages are torn out, then this spellbook becomes nonmagical. (Command, Shield of Faith, Aid, Prayer of Healing, Revivify, and Death Ward)",
        spellcastingBonus : [{
            name : "Spellbook of Brilliant Incantations",
            spells : ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"],
            selection : ["command", "shield of faith", "aid", "prayer of healing", "revivify", "death ward"],
            times : 6,
            firstCol : 1
        }] 
    }
}


MagicItemsList["helm of the oathbreaker"] = {
    name : "Helm of the Oathbreaker",
    source : [["A:TTN", 26]],
    type : "armor (helmet)",
    rarity : "legendary",
    attunement : true,
    prerequisite : "requires attunement by a paladin",
    prereqeval : function(v) { 
        return classes.known.paladin;
    },
    description : "I gain a +1 bonus to my AC and is cursed. When I use a Divine Smite, I gain 5 temp. hp. Additionally, when I reduce a creature to 0 hp with my Divine Smite, they are instantly killed and cannot be brought back to life with spells of 5th level or lower. I gain +1 to my Strength every time I kill a good-aligned creature (max 24). See notes for curse.",
    toNotesPage : [{
        name : "Helm of the Oathbreaker: Curse",
        note : desc([
            "Every time I score a critical hit against a creature, I must make a DC 15 Wisdom saving throw or become charmed by the helmet until the end of my next turn. The helm will attempt to murder the nearest good-aligned creature, and will use Divine Smite on all of its attack if available."
        ])
    }],
    extraAC : [{name : "Helm of the Oathbreaker", mod : 1, magic : true, text : "I gain a +1 bonus to AC while attuned."}],
}

MagicItemsList["golden edge"] = {
    name : "Golden Edge",
    source : [["A:TTN", 27]],
    type : "weapon (dagger)",
    rarity : "legendary",
    attunement : true,
    description : "I gain a +3 to attack and damage rolls made with this dagger. If I am a Rogue, I gain a +2 to initiative rolls, cannot be surprised, and my sneak attack damage increases by 1d6. If I am a fighter, I gain an additional use of my Indomitable feature. Additionally when I use my Second Wind feature, I gain 10 temp hp and cannot be frightened while they last. Once per long rest, I can increase one of my ability scores to a 22 for an hour. After doing so, I must roll 1d8. On a 1, the dagger breaks and is irreparable. If I roll a 1 on an attack roll, I must roll 1d4. On a 1 or 2, the dagger breaks and is irreparable.",
    choices : ["Rogue", "Fighter", "Not a Rogue or Fighter"],
    selfChoosing : function() {
        if(classes.known.rogue) return "rogue";
        if(classes.known.fighter) return "fighter";
        if(!classes.known.rogue && !classes.known.fighter) return "not a rogue or fighter"
    },
    "rogue" : {
        name : "Golden Edge (Rogue)",
        description : "I gain a +3 to attack and damage rolls made with this dagger. I gain a +2 to initiative rolls, cannot be surprised, and my sneak attack damage increases by 1d6. Once per long rest, I can increase one of my ability scores to a 22 for an hour. After doing so, I must roll 1d8. On a 1, the dagger breaks and is irreparable. If I roll a 1 on an attack roll, I must roll 1d4. On a 1-2, the dagger breaks and is irreparable.",
        addMod : { type : "skill", field : "Init", mod : 2, text : "I have a +2 bonus on initiative rolls." },
        usages : 1,
        recovery : "long rest"
    },
    "fighter" : {
        name : "Golden Edge (Fighter)",
        additional : "Indomitable and Second Wind",
        description : "I gain a +3 to attack and damage rolls made with this dagger. I gain an additional use of my Indomitable feature. Additionally when I use my Second Wind feature, I gain 10 temp hp and cannot be frightened while they last. Once per long rest, I can increase one of my ability scores to a 22 for an hour. After doing so, I must roll 1d8. On a 1, the dagger breaks and is irreparable. If I roll a 1 on an attack roll, I must roll 1d4. On a 1-2, the dagger breaks and is irreparable.",
    },
    "not a rogue or fighter" : {
        name : "Golden Edge (not a rogue or fighter)",
        description : "I gain a +3 to attack and damage rolls made with this dagger. Once per long rest, I can increase one of my ability scores to a 22 for an hour. After doing so, I must roll 1d8. On a 1, the dagger breaks and is irreparable. If I roll a 1 on an attack roll, I must roll 1d4. On a 1-2, the dagger breaks and is irreparable.",
    },
    weaponOptions : [{
        name : "Golden Edge",
        regExpSearch : /golden edge/i,
        baseWeapon : "dagger",
        modifiers : [3,3],
        selectNow : true
    }],
    calcChanges : {
        atkAdd : [
            function(fields, v) {
                if(classes.known.rogue && (/sneak attack/i).test(fields.Description)) {
                    var match = fields.Description.match(/sneak attack (\d+)d(\d+)/i);
                    var dice = match[0].match(/(\d+)d(\d+)/i);
                    var nDice = parseInt(dice[1]);
                    nDice += 1;
                    fields.Description = fields.Description.replace(/sneak attack (\d+)d(\d+)/i, "Sneak attack " + nDice + "d6");
                }
            },
            'My sneak attack damage increases by 1d6',
            800 // sneak attack is applied at 700, make sure this goes after sneak attack is applied.
        ]
    }
}

MagicItemsList["void beckoner"] = {
    name : "Void Beckoner",
    type : "wand",
    rarity : "legendary",
    attunement : true,
    source : [["A:TTN", 28]],
    description : "I gain a +2 to my spell attacks and spell save DC. This wand has 10 charges, gaining 1d6+2 at dawn. I can expend a number of charges to cast spells associated with this wand. As an actions I expend 5 charges to use Open Rift (see notes).",
    toNotesPage : [{
        name : "Void Beckoner: Open Rift",
        note : desc([
            "As an action, I can expend 5 charges to open a rift in an unoccupied space within 60 ft. Each creature within 30 ft of it must make a DC 17 Strength saving throw or take 3d6 force damage and be pulled 15 ft towards the rift. A large or smaller creature that starts its turn within 5 ft of the rift and fails the Strength save takes an additional 10d6 force damage and must succeed on a DC 17 Charisma saving throw or be swallowed by the void. Only a Wish spell can return the creature back.",
            "This rift remains open for one minutes, or until I dismiss it. At the start of each of my turns, while the rift remains open, roll 1d10. On a 1, a Karcharis burst open from the rift, its ravenous hunger focused on the wielder of the Void Beckoner."
        ])
    }],
    fixedDC : 17,
    calcChanges : {
        spellCalc : [
            function (type, spellcasters, ability) {
                if (type !== "prepare") return 2;
            },
            "I gain a +2 bonus to spell attack rolls and spell save DC."
        ]
    },
    action : ["action", "Open Rift (5 charges)"],
    usages : 10,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "Void Beckoner (1 ch)",
        spells : ["magic missile", "tasha's hideous laughter"],
        selection : ["magic missile", "tasha's hideous laughter"],
        times : 2,
        firstCol : 1
    }, {
        name : "Void Beckoner (3 ch)",
        spells : ["bestow curse", "counterspell"],
        selection : ["bestow curse", "counterspell"],
        times : 2,
        firstCol : 3
    }, {
        name : "Void Beckoner (5 ch)",
        spells : ["planar binding", "telekinesis"],
        selection : ["planar binding", "telekinesis"],
        times : 2,
        firstCol : 5
    }]
}

MagicItemsList["ancient teng key"] = {
    name : "Ancient Teng Key",
    type : "wondrous item",
    rarity : "artifact",
    source : [["A:TTN", 31]],
    attunement : true,
    prerequisite : "Mysterious Teng Tablet",
    prereqeval : function(v) {
        return (CurrentMagicItems.known.indexOf("mysterious teng tablet") !== -1)
    },
    description : "The Teng Tablet has now evolved into this key. Weighing 100 pounds, it cannot be carried by a creature with a Strength score lower than 12. I can increase one of my ability scores by 2, and can cast spells associated with this key with only verbal components. After casting one of these spells, I am affected by the Gaze of Arkans curse until I finish a long rest.",
    scorestxt : "+2 to one ability score",
    spellcastingBonus : [{
        name : "Ancient Teng Key",
        spells : ["find the path", "find traps", "word of recall"],
        selection : ["find the path", "find traps", "word of recall"],
        times : 3,
        firstCol : ""
    }],
    toNotesPage : [{
        name : "Ancient Teng Key",
        note : desc([
            "The Teng Tablet has now evolved into this key. I can use this key to seal Teng control rooms, giving me a safe place to rest, should I need one. A Teng construct or machine that is in contact with the Ancient Key regains 10 hp per round. If it was broken or in a state of disrepair, it becomes functional only when it is restored to its max hp. Teng Sentinels will not attack you, and their vehicles and machines will respond to your commands as well as their state of disrepair allows."
        ]),
        amendTo : "Mysterious Teng Tablet"
    }]
}

SpellsList["rock strike"] = {
    name : "Rock Strike",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TTN", 37]],
    level : 2,
    school : "Evoc",
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "a small rock",
    duration : "Instantaneous",
    save : "Str",
    description : "1 crea, ranged spell attack; 3d10+1d10/SL bludgeoning dmg; Strength save or knocked prone",
    descriptionFull : "I hurl a small rock at a creature within range. The rock then triples in size before striking the target. On a hit, the target takes 3d10 bludgeoning damage and must make a Strength saving throw or knocked prone if it is a large or smaller creature, it is knocked prone." + AtHigherLevels + "When I cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
}

SpellsList["burial"] = {
    name : "Burial",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TTN", 37]],
    level : 4,
    school : "Necro",
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "a fistful of soil",
    duration : "Conc, 1 min",
    description : "1 crea Strength save or earth swallows, descending 10 ft; Target blinded, restrained, incapacitated, total cover; 3d6 necrotic dmg at start of turn",
    descriptionFull : "I force a creature standing on earth or rock to sink into the ground. The target must succeed a Strength saving throw or descend 10 ft into the earth as they are swallowed. The target is blinded, restrained, and incapacitated. It has total cover against all attacks and other effects outside the earth, and taks 3d6 necrotic damage at the start of each of its turns. It begins to suffocate if it requires air. A creature can repeat the saving throw at the start of each of its turns. If I am more than 60 ft away from the target or lose concentration, the spell ends and the target can expend 10 ft of movement to crawl out, exiting prone."
}

SpellsList["protection of stone"] = {
    name : "Protection of stone",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TTN", 37]],
    level : 5,
    school : "Abjur",
    time : "1 a",
    range : "Self",
    components : "V,S,M",
    compMaterial : "a small piece of granite",
    duration : "Conc, 1 min",
    description : "Magic stones orbit in 10 ft sphere around me; 1/2 cover; bns a. hurl stone 60ft, Dex save 3d8+1d8/SL blud., save halves; see full desc.",
    descriptionFull : "Until this spell ends, magical stones orbit around me in a 10 ft sphere, giving me half-cover against attacks and area effects outside the sphere. As a bonus action on my turn, I can hurl a stone at a target within 60 ft. The target must make a Dexterity saving throw, taking 3d8 bludgeoning damage on a failed save, or half on a success. As a reaction when a creature attempts to pass through the sphere, I can command the stones to form a solid wall, preventing them from reaching me. The target must make a contested Athletics or Acrobatics check against my spell save DC. On a failed save, it cannot move closer to me." + AtHigherLevels + "When I case this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
}

MagicItemsList["dwarven lantern"] = {
    name : "Dwarven Lantern",
    type : "wondrous item",
    source : [["A:TTN", 42]],
    rarity : "rare",
    description : "This lantern sheds bright light in a 30 ft radius and dim light for an additional 30 ft. Creatures with blindsense cannot see anything that is within the bright light. It also has 10 charges, burning one charge per hour and requiring Dwarven Oil to replenish.",
    usages : 10,
    recovery : "Oil"
}

MagicItemsList["the fixer"] = {
    name : "The Fixer",
    source : [["A:TTN", 46]],
    type : "wondrous item",
    rarity : "rare",
    attunement : true,
    description : "I can cast Guidance and Mending. Any medium or smaller broken non-magical item can be fixed with a gentle tap. It has 5 charges, regaining 1d4+1 at dawn. Expending one gives me adv. on any skill check, 5 charges restores 1/2 the max charges of another magical items of Very Rare or lower. +3 bonus to Charisma checks to de-escalate a situtation and avoid battle.",
    usages : 5,
    recovery : "dawn",
    spellcastingBonus : [{
        name : "The Fixer",
        spells : ["guidance", "mending"],
        selection : ["guidance", "mending"],
        times : 2,
    }]
}

MagicItemsList["pointy hat of brazen explorers"] = {
    name : "Pointy Hat of Brazen Explorers",
    source : [["A:TTN", 46]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "I gain a +1 to my spell attack rolls, and ranged spell attacks vs. targets within 5 ft of me are considered melee spell attacks. I can add my spellcasting ability modifier to the damage of melee attack spells. I gain a +1 to my Charisma, or +2 if I am a dwarf.",
    choices : ["Dwarf", "Not a Dwarf"],
    selfChoosing : function() {
        if((/dwarf/i).test(CurrentRace.known)) return "dwarf";
        if(!(/dwarf/i).test(CurrentRace.known)) return "not a dwarf";
    },
    "dwarf" : {
        name : "Pointy Hat of Brazen Explorers (Dwarf)",
        description : "I gain a +1 to my spell attack rolls, and ranged spell attacks vs. targets within 5 ft of me are considered melee spell attacks. I can add my spellcasting ability modifier to the damage of melee attack spells. I gain a +2 to my Charisma.",
        scores : [0,0,0,0,0,2]
    },
    "not a dwarf" : {
        name : "Pointy Hat of Brazen Explorers (Not a Dwarf)",
        description : "I gain a +1 to my spell attack rolls, and ranged spell attacks vs. targets within 5 ft of me are considered melee spell attacks. I can add my spellcasting ability modifier to the damage of melee attack spells. I gain a +1 to my Charisma.",
        scores : [0,0,0,0,0,1]
    },
    calcChanges : {
        spellCalc : [
            function (type, spellcasters, ability) {
                if (type == "attack") return 1;
            },
            "I gain a +1 bonus to spell attack rolls."
        ]
    }
}

MagicItemsList["backpack of endless supplies"] = {
    name : "Backpack of Endless Supplies",
    source : [["A:TTN", 47]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : false,
    description : "This backpack in indistinguishable from any other backpack. For this item to function, it must carry nothing inside. I can activate it 1/LR, and must lay it flat on the floor and say the command word, Margel. It then sprawls out into a black mahogany table filled with dwarven food and drink. This takes 1 hr to consume, and those who eat are satiated for 24 hrs and gain 24 temp hp. After an hour, it folds back into a backpack.",
    usages : 1,
    recovery : "long rest"
}

MagicItemsList["igmar's diamond pickaxe"] = {
    name : "Igmar's Diamond Pickaxe",
    source : [["A:TTN", 47]],
    type : "weapon (pickaxe)",
    rarity : "legendary",
    attunement : true,
    description : "This +3 pickaxe deals double damage to objects and structures and has an increased critical range, but have a -2 to attack against creatures. Minerals, constructs, and rocks take an additional 2d10 force damage, and minerals and rocks extracted with this are in perfect condition. 1/LR I can cast Move Earth. I have disadvantage on attacks if my Strength is 14 or lower.",
    weaponOptions : [{
        name : "Igmar's Diamond Pickaxe",
        regExpSearch : /igmar's diamond pickaxe/i,
        source : [["A:TTN", 47]],
        type : "Martial",
        ability : 1,
        abilitytodamage : true,
        damage : [1,6, "piercing"],
        range : "Melee",
        description : "Versatile (1d8), destructive, heavy armament, +1 crit range",
        tooltip : "Heavy armament: Creatures with a Strength score of 14 or lower have disadvantage on the attack rolls.\n Destructive: This pickaxe has a -2 to attack creatures and deals double damage vs objects and structures.",
        special : true,
        weight : 44,
        selectNow : true
    }],
    spellcastingBonus : [{
        name : "Igmar's",
        spells : ["move earth"],
        selection : ["move earth"],
        times : 1,
        firstCol : "oncelr"
    }]
}

SpellsList["starlight aura"] = {
    name : "Starlight Aura",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TTN", 52]],
    level : 0,
    school : "Ench",
    time : "1 bns",
    range : "Self",
    components : "V,S",
    duration : "1 rnd", // rnd = turn
    description : "30ft rad dim light around me;  my spellcasting ability modifier creas +1 to attack, ability, and saving throws til end of my next turn",
    descriptionFull : "A scattering of star-like flecks appear around me, illuminating the area with 30 ft of dim light. These motes of starlight remain until the end of my next turn, during which I and a number of allies equal to my spellcasting ability modifier within 30 ft gain +1 to attack rolls, ability checks, and saving throws."
}

SpellsList["shooting star"] = {
    name : "Shooting Star",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TTN", 52]],
    level : 3,
    school : "Evoc",
    time : "1 a",
    range : "120 ft",
    components : "V,S,M",
    compMaterial : "a shiny white pearl worth at least 100 gp",
    duration : "Instantaneous",
    description : "Spell atk 8d8 force dmg and Revealed until the end of its next turn",
    descriptionFull : "I hurl a streaking star from the palm of my hand at a creature within range. On a hit, the target takes 8d8 Force damage and is Revealed until the end of its next turn."
}

SpellsList["watcher's smite"] = {
    name : "Watcher's smite",
    classes : ["paladin"],
    source : [["A:TTN", 52]],
    level : 5,
    school : "Evoc",
    time : "1 bns",
    range : "Self",
    components : "V",
    duration : "Conc, 1 min",
    save : "Cha",
    description : "Next weapon hit +6d10 Force dmg and Revealed until end of next turn; Aberr. Cha saving throw take 10d6 Force, save halves"
}

MagicItemsList["dimensional blade"] = {
    name : "Dimensional Blade",
    source : [["A:TTN", 53]],
    type : "weapon (longsword)",
    rarity : "artifact",
    attunement : true,
    // there is no such thing as cosmic smite in the PDF
    // Confirmed with their Patreon that this spell is the watcher's smite spell
    description : "This +3 longsword deals an additional 1d8 Force damage on a hit. If I am a fighter, I can use an action to recover one use of my action surge feature. If I am a Paladin or a Pact of the Blade Warlock, I can cast Watcher's Smite through this weapon 1/LR. Aberrations take an additional 4d8 Force damage. See notes for weapon features.",
    toNotesPage : [{
        name : "Dimensional Blade",
        note : desc([
            "Curse of Dimensions: When a creature is hit with this blade, they become dimensionally shattered. A creature dimensionally shattered has a -3 to all rolls and disadvantage on Charisma saving throws.",
            "Spells: I can use my action to cast one of the following spells 1/LR (spell save DC 18): Shooting Star, Banishment, Wall of Force.",
            "Dimensional Passage: While I wield this sword, I can choose a point within 10 ft of me. At any point over the next 8 hours, I can choose another point within 10 ft of me. When both points are chosen, a portal opens, connecting the two points, even if they're on different planes. The portal does not open if one of the points is occupied. They last for an hour or until I dismiss them. The portal cannot do damage nor be destroyed, and I can use this once per long rest."
        ])
    }],
    spellcastingBonus : [{
        name : "Dimensional Blade",
        spells : ["shooting star", "banishment", "wall of force"],
        selection : ["shooting star", "banishment", "wall of force"],
        times : 3,
        fixedDC : 18,
        firstCol : "oncelr"
    }],
    weaponOptions : [{
        name : "Dimensional Blade",
        regExpSearch : /dimensional blade/i,
        source : [["A:TTN", 53]],
        baseWeapon : "longsword",
        description : "Finesse, versatile (1d10); +1d8 Force dmg; +4d8 Force dmg vs Aberr; Special; Heavy",
        tooltip : "Special: Creatures hit with this weapon are dimensionally shattered. They have a -3 to all rolls and disadvantage on Charisma saving throws.\n Heavy: I have disadvantage on attack rolls if my Stength is 14 or lower.",
        modifiers : [3,3],
        selectNow : true
    }],
    limfeaname : "Dimensional Passage",
    usages : 1,
    recovery : "long rest",
    choices : ["Fighter", "Paladin", "Pact of the Blade Warlock", "Other"],
    selfChoosing : function() {
        if(classes.known.fighter) return "fighter";
        if(classes.known.paladin) return "paladin";
        if(classes.known.warlock && (/hexblade/).test(classes.known.warlock.subclass) && GetFeatureChoice('class', 'warlock', 'pact boon') == 'pact of the blade') return "pact of the blade warlock";
        return "other";
    },
    "fighter" : {
        name : "Dimensional Blade (Fighter)",
        description : "This +3 longsword deals an additional 1d8 Force damage on a hit. I can use an action to recover one use of my action surge feature. Aberrations take an additional 4d8 Force damage. See notes for weapon features.",
        limfeaname : "Fighter's Adrenaline",
        usages : 1,
        recovery : "action"
    },
    "paladin" : {
        name : "Dimensional Blade (Paladin)",
        description : "This +3 longsword deals an additional 1d8 Force damage on a hit. I can cast Watcher's Smite through this weapon 1/LR. Aberrations take an additional 4d8 Force damage. See notes for weapon features.",
        spellcastingBonus : [{
            name : "Dimensional Blade (Paladin)",
            spells : ["watcher's smite"],
            selection : ["watcher's smite"],
            times : 1,
            firstCol : "oncelr"
        }]
    },
    "pact of the blade warlock" : {
        name : "Dimensional Blade (Pact of the Blade)",
        description : "This +3 longsword deals an additional 1d8 Force damage on a hit. I can cast Watcher's Smite through this weapon 1/LR. Aberrations take an additional 4d8 Force damage. See notes for weapon features.",
        spellcastingBonus : [{
            name : "Dimensional Blade (Pact of the Blade)",
            spells : ["watcher's smite"],
            selection : ["watcher's smite"],
            times : 1,
            firstCol : "oncelr"
        }]
    },
    "other" : {
        name : "Dimensional Blade (Other)",
        description : "This +3 longsword deals an additional 1d8 Force damage on a hit. Aberrations take an additional 4d8 Force damage. See notes for weapon features."
    }
}

MagicItemsList["crystallized arcanite"] = {
    name : "Crystallized Arcanite",
    source : [["A:TTN", 61]],
    type : "treasure",
    rarity : "very rare",
    attunement : false,
    description : "I can use my reaction to regain a 2d4+2 levels worth of spell slots if I am within 10 ft of this item.",
    action : ["reaction", ""]
}

MagicItemsList["teng diving suit"] = {
    name : "Teng Diving Suit",
    source : [["A:TTN", 69]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true,
    description : "This suit is magically powered unless all 20 of its charges are expended. Each suit is designed to fit a specific size of creature, small, medium or large, with medium being the most common. While wearing this suit, my AC is 20 and I am resistant to bludgeoning, piercing, and slashing damage, and can withstand 1000 atmopheres. See notes for full details.",
    toNotesPage : [{
        name : "Teng Diving Suit: Features",
        note : desc([
            "I can only attune to this suit if the size of it fits me.",
            "This suit has a maximum of 20 charges. It consumes 1 charge per hour to power this suit. To recharge it, I can use my action to expend a slot slot. The suit regains a number of charges equal the level of spell slot used.",
            "My AC becomes 20, and I can survive pressures up to 1000 atmospheres. But my walking speed is reduced to 10 ft, and I gain a swimming speed of 50 ft.",
            "I can expend a number of charges to cast the following spells:",
            "\u2022 1 Charge: Shocking Grasp (4d8)",
            "\u2022 3 Charges: Lightning Bolt",
            "\u2022 5 Charges: Chain Lightning"
        ])
    }],
    spellcastingBonus : [{
        name : "Teng Diving Suit (1)",
        spells : ["shocking grasp"],
        selection : ["shocking grasp"],
        times : 1,
        firctCol : 1
    }, {
        name : "Teng Diving Suit (3)",
        spells : ["lightning bolt"],
        selection : ["lightning bolt"],
        times : 1,
        firctCol : 3
    }, {
        name : "Teng Diving Suit (5)",
        spells : ["chain lightning"],
        selection : ["chain lightning"],
        times : 1,
        firctCol : 5
    }],
    spellChanges : {
        "shocking grasp" : {
            description : "Spell attack, adv. if metal armor, 4d8 Lightning dmg, no rea 1 turn",
            descriptionCantripDie : "Spell attack, adv. if metal armor, 4d8 Lightning dmg, no rea 1 turn",
            descriptionFull : "Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 4d8 lightning damage, and it can't take reactions until the start of its next turn.",
            changes : "The spells damage is set to 4d8 indicated by the Teng Diving Suit."
        }
    },
    usges : 20,
    recovery : "SS"
}

MagicItemsList["emerald tablet of life"] = {
    name : "Emerald Tablet of Life",
    source : [["A:TTN", 77]],
    type : "wondrous item",
    rarity  : "artifact",
    prerequisite : "Mysterious Teng Tablet and Ancient Teng Key",
    prereqeval : function(v) {
        return (CurrentMagicItems.known.indexOf("mysterious teng tablet") !== -1 && CurrentMagicItems.known.indexOf("ancient teng key") !== -1)
    },
    attunement : true,
    description : "The tablet is weightless to me and terribly heavy to everyone else. I gain additional features found on the notes page.",
    toNotesPage : [{
        name : "Emerald Tablet of Life",
        note : desc([
            "While attuned to this tablet, my Constitution score becomes a 26, unless it is already higher. I gain the following:",
            "\u2022 One legendary resistance",
            "\u2022 One damage immunity",
            "\u2022 One condition immunity",
            "\u2022 Resistance to all elemental damage (acid, cold, fire, lightning, and thunder)",
            "\u2022 I can cast True Resurrection once per week without any material components",
            "Additionally, this artifact gains sentience and new powers over the course of centuries under the possession of brilliant Dwarven and Teng artificers, which it maintains in its awakened form."
            + " I can use it to seal or unseal Teng control rooms and outposts. A Teng construct or machine that is in contact with this tablet regains 25 hp per round. If it was broken or in a state of disrepair, it becomes functional when it is restored to its max hp.",
            "Teng Sentinels will act friendly towards me, and their vehicles and machines respond to my commands as well as their state of disrepair allows."
        ]),
        amendTo : "Mysterious Teng Tablet"
    }],
    limfeaname : "Legendary Resistance",
    usages : 1,
    recovery : "long rest",
    dmgres : ["Acid", "Cold", "Fire", "Lightning", "Thunder"],
    spellcastingBonus : [{
        name : "Emerald Tablet of Life",
        spells : ["true resurrection"],
        selection : ["true resurrection"],
        times : 1,
        firctCol : "1/W"
    }]
}

/*

        THE EMERALD CROWN

*/

SourceList["A:TEC"] = {
    name : "Ariadne's: The Emerald Crown",
    abbreviation : "A:TEC",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/04/11"
};

CompanionList["ariadne's: the emerald crown companion codex"] = {
    name : "Ariadne's: The Emerald Crown Companion Codex",
    nameMenu : "Companion",
    source : [["A:TEC", 0],["A:CoS", 0]]
}

MagicItemsList["sword and gourd"] = {
    name : "Sword and Gourd",
    source : [["A:TEC",7]],
    rarity : "rare",
    type : "wondrous item",
    attunement : true,
    description : "The sword is a +1 longsword, but deals necrotic damage instead of its normal damage. Whenever I hit a creature with this weapon, I gain an amount of gourd charges equal to half the damage dealt. This can store up to 30 charges.",
    toNotesPage : [{
        name : "Gourd Charges",
        note : desc([
            "On my turn, I can expend a number of gourd charges to do the following:",
            "10 Charges: healing word, cure wounds.",
            "20 Charges: aid, lesser restoration.",
            "30 Charges: mass healing word, revivify."
        ])
    }],
    usages : 30,
    recovery : "1/2 dmg",
    spellcastingBonus : [{
        name : "Gourd Spells (10)",
        spells : ["healing word", "cure wounds"],
        selection : ["healing word", "cure wounds"],
        times : 2,
        firstCol : 10
    }, {
        name : "Gourd Spells (20)",
        spells : ["aid", "lesser restoration"],
        selection : ["aid", "lesser restoration"],
        times : 2,
        firstCol : 20
    }, {
        name : "Gourd Spells (30)",
        spells : ["mass healing word", "revivify"],
        selection : ["mass healing word", "revivify"],
        times : 2,
        firstCol : 30
    }],
    weaponOptions : [{
        regExpSearch : /sword and gourd/i,
        name : "Sword and Gourd",
        baseWeapon : "longsword",
        source : [["A:TEC",7]],
        damage : [1, 8, "necrotic"],
        description : "Versatile (1d10)",
        modifiers : [1,1],
        selectNow : true
    }]
};

MagicItemsList["grasping death"] = {
    name : "Grasping Death",
    source : [["A:TEC", 8]],
    rarity : "very rare",
    type : "wondrous item (consumable)",
    description : desc([
        "I can throw this against a surface. Creatures within 15ft must make DC 14 Con and DC 16 Cha saving throws. Creatures take 4d8 necrotic damage upon failing the Con save, or half on a success, and possed by an evil spirit for 1 minute upon failing the Cha save."
    ]),
    toNotesPage : [{
        name : "Grasping Death: Possession & Death",
        note : desc([
            "While a creature is possessed, it cannot cast spells or communicate, and will attack the nearest creature regardless of allegiance. It can reroll the save at the end of each of its turns.",
            "If a creature dies while possessed or from the necrotic damage, thorns and brambles sprout in a 15ft radius turning the area into difficult terrain. For every 5ft traveled, a creature takes 1d4 piercing and 1d4 poison damage."
        ])
    }]
};

MagicItemsList["splintered greenhelm"] = {
    name : "Splintered Greenhelm",
    source : [["A:TEC", 8]],
    rarity : "rare",
    type : "wondrous item",
    attunement : true,
    description : desc([
        "I gain a +2 bonus to Survival, Animal Handling, and Medicine checks (not included in the automation). Once between short or long rest, I can grant myself a +2 to my AC and resistance to slashing, piercing, and bludgeoning damage. This lasts for 30 seconds, after which I roll 1d10. On a 1, the helm crumbles and becomes a common nonmagical helm."
    ]),
    usages : 1,
    recovery : "short rest"
};

MagicItemsList["amulet of prisma"] = {
    name : "Amulet of Prisma",
    source : [["A:TEC", 8]],
    rarity : "very rare",
    type : "wondrous item",
    attunement : true,
    description : desc([
        "While attuned, any radiant damage I deal becomes prismatic damage, ignoring radiant resistance and treating immunity as if it were resistance. Whenever a creature receives prismatic damage, it must succeed a DC 14 Con. save or be blinded until the end of its next turn."
    ])
};

FeatsList["boons of the fae serpent"] = {
    name : "Boons of the Fae Serpent",
    source : [["A:TEC", 16]],
    descriptionFull : "",
    description : "",
    allowDuplicates : true,
    choices : ["Fae Mind Shielding", "Fae Whispering", "Unknowable Resilience", "Corapheist’s Heartbless", "Conjuration Circle"],
    "fae mind shielding" : {
        description : "I have advantage on saving throws against spells and effects that would frighten or charm me.",
        savetxt : { adv_vs : ["charmed", "frightened"] }
    },
    "fae whispering" : {
        description : "I can cast Speak With Animals and Speak With Plants without expending a spell slot or components. I can do so an amount of times equal to my Proficiency Bonus per long rest",
        limfeaname : "Fae Whispering",
        usages : "Proficiency bonus per",
        usagescalc : "event.value = How('Proficiency Bonus');",
        spellcastingBonus : [{
            name : "Fae Whispering",
            spells : ["speak with animals", "speak with plants"],
            selection : ["speak with animals", "speak with plants"],
            times : 2,
        }]
    },
    "unknowable resilience" : {
        description : "I gain a random damage resistance. I'm already resistant, I gain immunity instead."
    },
    "corapheist’s heartbless" : {
        description : "I gain a +1 to an ability score of my choice, up to a maximum of 24.",
        scorestxt : "+1 to an ability, up to a max of 24"
    },
    "conjuration circle" : {
        description : desc([
            "Once per week, I can spend a minute to perform a ritual to generate a mushroom that opens a planar gate to a location that I am familiar with, regardless of distance or planar boundaries. This lasts for 10 minutes or until I dispel it. The location must also support mushroom growth."
        ]),
        limfeaname : "Conjuration Circle",
        usages : 1,
        recovery : "week"
    }
}

AddSubClass("fighter", "moss knight", {
    regExpSearch : /^(?=.*moss)(?=.*knight).*$/i,
    subname : "Moss Knight",
    source : [["A:TEC", 52]],
    abilitySave : 5,
    spellcastingFactor : 3,
    spellcastingList : {
        "class" : "druid",
        level : [0,4]
    },
    spellcastingKnown : {
        cantrips : [0,0,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3],
        spells : [0,0,3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13]
    },
    features : {
        "subclassfeature3" : {
            name : "Thorn Sprout",
            source : [["A:TEC", 52]],
            minlevel : 3,
            description : "\n   " + "I can use my bonus action to sprout venomous thorns on my armor and weapons, which lasts for one minute. Attacks deal an additional 1d6 poison damage and when a creature hits me with a melee attack, they take 1d6 poison damage. While the thorns are sprouted, my melee attacks are magical. I can use this again once I finish a short or long rest.",
            usages : 1,
            recovery : "short rest",
            action : ["bonus action", ""]
        },
        "subclassfeature3.1" : {
            name : "Druidic Casting",
            source : [["A:TEC", 52]],
            minlevel : 3,
            description : "\n   " + "I can cast known druid cantrips/spells, using Wisdom as my spellcasting ability",
            additional : ["", "", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 5 spells known", "2 cantrips \u0026 6 spells known", "2 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 12 spells known", "3 cantrips \u0026 13 spells known"],
        },
        "subclassfeature7" : {
            name : "Sylvan Soul",
            source : [["A:TEC", 52]],
            minlevel : 7,
            description : "\n   " + "I can communicate with beasts and plants as though we share a language. They are friendly to me unless they are under the effects of a curse or if I am overly hostile to them. Additionally, I gain resistance to poison damage and moving through nonmagical difficult terrain does not cost me extra movement. I can move through nonmagical plants without being slowed by them and void damage from them if they have thorns, spines, or similar hazards.",
            dmgres : ["Poison"]
        },
        "subclassfeature10" : {
            name : "Permanent Thorns",
            source : [["A:TEC", 52]],
            minlevel : 10,
            description : "\n   " + "My Thorn Sprout ability is always active unless I choose to dismiss it. Additionally, whenever I hit a creature with a melee attack, they must succeed a Stength saving throw against my spell save DC or be restrained by magical vines until the end of their next turn.",
            calcChanges : {
                atkAdd : [
                    function(fields, v) {
                        if(v.isMeleeWeapon) {
                            fields.Description += (fields.Description ? '; ' : '') + 'Counts as magical; +1d6 poison dmg';
                        }
                    }
                ]
            }
        },
        "subclassfeature15" : {
            name : "Dryad Blood",
            source : [["A:TEC", 52]],
            minlevel : 15,
            description : "\n   " + "I gain immunity to poision damage, and cannot be affected by poison or disease. Additonally, I gain a bonus to all of my saving throws equal to my Wisdom modifier",
            addMod : [{ type : "save", field : "all", mod : "Wis", text : "I gain a bonus to all of my saving throws equal to my Wisdom modifier"}],
            savetxt : { immune : ["posion", "disease"]}
        },
        "subclassfeature18" : {
            name : "Moss Liege",
            source : [["A:TEC", 52]],
            minlevel : 18,
            description : "\n   " + "Flowers and herbs bloom behind me as I walk, and I can command plants and animals and they are compelled to heed them unless it is harmful to them or nature in general. I regenerate 1d4+1 hit points at the start of each of my turns and stopped aging.",
            usages : 1,
            recovery : "turn",
        }
    }
});

MagicItemsList["druid's kindness"] = {
    name : "Druid's Kindness",
    source : [["A:TEC", 54]],
    type : "potion",
    rarity : "rare",
    description : "When I drink this potion, I regain 2d4+2 hit points, and gain immunity to disease and resistance to necrotic and poison damage for the next 8 hours."
};

MagicItemsList["tome of the green mage"] = {
    name : "Tome of the Green Mage",
    source : [["A:TEC", 55]],
    rarity : "very rare",
    type : "focus",
    attunement : true,
    prerequisite : "requires attunement by a wizard",
    prereqeval : function(v) {return classes.known.wizard ? true : false;},
    description : "I gain a +1 to my spell save DC and spell attacks. If I use this as my spellbook, I can write and learn spells from the Druid spell list, but they count as wizard spells for me and uses Intelligence.",
    calcChanges : {
        spellList : [
            function(spList, spName, spType) {
                if (spName !== "wizard" || spType.indexOf("bonus") !== -1) return;
                var druidSpellList = CreateSpellList({"class" : "druid", level : [0,4]}, false, false, false);
                spList.extraspells = spList.extraspells.concat(druidSpellList);
            }
        ],
        spellCalc : [
            function(type, spellcasters, ability) {
                if(type !== "prepare") return 1;
            }
        ]
    }
};

MagicItemsList["pashama's ear"] = {
    name : "Pashama's Ear",
    source : [["A:TEC", 55]],
    rarity : "rare",
    type : "wondrous item",
    attunement : true,
    description : "I gain the Keen Hearing trait which grants me advantage on Perception and Investigation checks that rely on hearing. Additionally, I have a blindsight range of 30 ft, which ceases to function if I am deafened.",
    vision : [["Adv. on Perception and Investigation relying on hearing", 0], ["Blindsight", 30]]
};

MagicItemsList["greenfeather's mask"] = {
    name : "Greenfeather's Mask",
    source : [["A:TEC", 56]],
    rarity : "artifact",
    type : "wondrous item",
    attunement : true,
    choices : ["Barbarian", "Not a Barbarian"],
    selfChoosing : function() {
        if(classes.known.barbarian) return "barbarian";
        if(!classes.known.barbarian) return "not a barbarian";
    },
    "barbarian" : {
        name : "Greenfeather's Mask (Barbarian)",
        description : "I gain a +2 to Con., Dex., and Str., up to a max of 26. While I am raging, I heal for 1d8 + my Con. mod at the start of my turn, and gain a fly speed of 60 ft.",
    },
    "not a barbarian" : {
        name : "Greenfeather's Mask (Not a Barbarian)",
        description : "I gain a +2 to Con., Dex., and Str., up to a max of 26."
    },
    scores : ["+2","+2","+2",0,0,0],
    scoresMaximum : [26,26,26,0,0,0]
};

MagicItemsList["diarmuid's warboard"] = {
    name : "Diarmuid's Warboard",
    source : [["A:TEC", 56]],
    rarity : "legendary",
    type : "shield",
    attunement : true,
    description : "This is a +1 shield. Upon attuning, and as part of a short or long rest, I can choose which of the effects to activate as if I am under the Enhance Ability spell. Additionally, I can use my reaction to bash a target that missed me with a melee attack. They must succeed a DC 16 Strength saving throw or be knocked prone and restrained until the end of its next turn.",
    shieldAdd : ["Diarmuid's Warboard", 3, 6],
    action : ["reaction", ""]
};

MagicItemsList["fragarch, the memory blade"] = {
    name : "Fragarch, the Memory Blade",
    source : [["A:TEC", 63]],
    rarity : "artifact",
    type : "weapon (longsword)",
    attunement : true,
    fixedDC : 22,
    description : "This +3 longsword deals an additional 1d8 psychic damage. Once per turn when I hit a creature, I can forgo the damage to cast Modify Memory (DC 22) or memory mark the target which lasts for 24 hours, unless they're on a different plane or a remove curse spell of 5th level or higher is used. As an action, I can cast modify memory on every memory marked target at once, if one target succeeds the save, then the spell doesn't affect any of the targets.",
    spellcastingBonus : [{
        name : "Memory Blade",
        spells : ["modify memory"],
        selection : ["modify memory"],
        times : 1
    }],
    weaponOptions : [{
        regExpSearch : /fragarch, the memory blade/i,
        name : "Fragarch, the Memory Blade",
        baseWeapon : "longsword",
        description : "Versatile (1d10); +1d8 psychic",
        modifiers : [3,3],
        selectNow : true
    }]
};

MagicItemsList["gregoria's courage"] = {
    name : "Gregoria's Courage",
    source : [["A:TEC", 64]],
    rarity : "artifact",
    type : "shield",
    attunement : true,
    description : "This is a +2 shield, and I can cast Hellish Rebuke at will, but it deals radiant damage instead of fire. Once per short or long rest, I can use my action to immolate my enemies. Up to 10 creatures of my choice must make a DC 20 Dex save taking 8d6 fire and 8d6 radiant damage, or half on a save.",
    spellcastingBonus : [{
        name : "Gregoria's Courage",
        spells : ["hellish rebuke"],
        selection : ["hellish rebuke"],
        times : 1,
        firstCol : "atwill"
    }],
    spellChanges : {
        "hellish rebuke" : {
            description : "Cast when taking damage, creature that dealt damage takes 2d10 Radiant damage; save halves",
            descriptionFull : "You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.",
            changes : "Damage becomes radiant instead of fire."
        }
    },
    shieldAdd : ["Gregoria's Courage", 4, 6],
    action : ["action", "Immolate"]
};

MagicItemsList["first shard of the crown"] = {
    name : "First Shard of the Crown",
    source : [["A:TEC", 67]],
    rarity : "artifact",
    type : "wondrous item",
    attunement : true,
    description : "I gain a +1 to my spell save DC and spell attacks, and I am permanently under the effects of the Protection From Evil and Good spell. Any attacks I make deal an addition 1d6 radiant damage. At the start of my turn, I forgo the damage to gain the effects of the Sanctuary spell for the same duration.",
    calcChanges : {
        atkAdd : [
            function(fields, v) {
                if(!v.isDC) {
                    fields.Description += (fields.Description ? '; ' : '') + "+1d6 radiant"
                }
            }
        ],
        spellCalc : [
            function(type, spellcasters, ability) {
                if(type !== "prepare") return 1;
            }
        ]
    }
};

SpellsList["dazing spores"] = {
    name : "Dazing Spores",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TEC", 68]],
    level : 0,
    school : "Evoc",
    time : "1 a",
    range : "S:15-ft cone",
    components : "V,S",
    duration : "Instantaneous",
    save : "Con",
    description : "Save or take 1d4 poison dmg and unable to take reactions; no effect vs. crea with poison immunity; +1d4 at CL 5, 11, and 17",
    descriptionCantripDie : "Crea save or take `CD`d4 poision and no reactions until end of next turn; no effect vs. crea with poison immunity"
};

SpellsList["mushroom messaging"] = {
    name : "Mushroom Messaging",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TEC", 68]],
    level : 0,
    school : "Trans",
    time : "1 a",
    range : "10 miles",
    components : "V,S",
    duration : "until dispelled",
    description : "I and 1 willing crea in terrain able to grow mushrooms, communicate telepathetically",
    descriptionFull : "I use the long networks of mycelium that hide underground to form a telepathic bond with a creature I am familiar with. If the creature is within 10 miles, standing in terrain hospitable to mushroom growth, and willing to speak to me, I can communicate with it mentall for as long as all three conditions are met."
}

SpellsList["ironwood tempering"] = { 
    name : "Ironwood Tempering",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TEC", 68]],
    level : 1,
    school : "Trans",
    time : "1 a",
    range : "Touch",
    components : "V,S,M",
    compMaterial : "a shard of petrified wood",
    duration : "Conc, 1 hr",
    description : "One nonmagical armor or shield gains a +1 bonus to AC"
}

MagicItemsList["third shard of the emerald crown"] = {
    name : "Third Shard of the Emerald Crown",
    source : [["A:TEC", 24]],
    rarity : "artifact",
    type : "wondrous item",
    description : desc([
        "My spell save DC increases by 2 and my Wisdom score cannot be lower than a 20. In addition, I can cast the following spells: daylight, plant growtn, and control water (3/day each), sunbeam, wall of ice, and flame strike (1/day each)."
    ]),
    calcChanges : {
        spellCalc : [
            function(type, spellcasters, ability) {
                if(type === "dc") return 2;
            }
        ]
    },
    spellcastingBonus : [{
        name : "Emerald Crown (3/day each)",
        spells : ["daylight", "plant growth", "control water"],
        selection : ["daylight", "plant growth", "control water"],
        times : 3,
        firstCol : 3
    }, {
        name : "Emerald Crown (1/day each)",
        spells : ["sunbeam", "wall of ice", "flame strike"],
        selection : ["sunbeam", "wall of ice", "flame strike"],
        times : 3,
        firstCol : 1
    }],
    scoresOverride : [0, 0, 0, 20, 0, 0]
};

RaceList["oberon"] = {
    regExpSearch : /oberon/i,
    name : "Oberon",
    source : [["A:TEC", 26]],
    plural : "Oberons",
    size : [3,4],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    scores : [0, 0, 0, 0, 0, 2],
    scorestxt : "+2 to Charisma, +1 to any ability score",
    age : " immortal or 50 years on the material plane before being reborn",
    height : " ranges from no bigger than an owl to 7ft tall warriors",
    weight : " weigh between 30 lb to 190 lb",
    vision : [["Darkvision", 60]],
    languageProfs : ["Common", "Sylvan"],
    savetxt : {
		text : ["Magic can't put me to sleep"],
		adv_vs : ["charmed"]
	},
    trait : "Oberon (+2 Charisma, +1 to any ability score)" + desc([
        "Fey: My creature type is fey, rather than humanoid.",
        "Flight: I start with a 30 ft fly speed. To use this speed, I can't be wearing medium or heavy armor. At 11th level, this becomes 50 ft and I can use it while wearing medium or heavy armor.",
        "Step of Light: I can cast Misty Step a number of times equal to my Proficiency Bonus per long rest"
    ]),
    features : {
        "flight1" : {
            name : "Flight",
            minlevel : 1,
            speed : { fly : { spd : 30, enc : 20 } }
        },
        "flight2" : {
            name : "Flight",
            minlevel : 11,
            speed : { fly : { spd : 50, enc : 20 } }
        },
        "step of light" : {
            name : "Step of Light",
            minlevel : 1,
            usages : "Proficiency bonus per",
            usagescalc : "event.value = How('Proficiency Bonus');",
            spellcastingBonus : [{
                name : "Step of Light",
                spells : ["misty step"],
                selection : ["misty step"],
                times : 1
            }]
        }
    }
};
RaceList["dryad"] = {
    regExpSearch : /dryad/i,
    name : "Dryad",
    source : [["A:TEC", 32]],
    plural : "Dryads",
    size : 3,
    speed : {
        walk : { spd : 35, enc : 25 }
    },
    scorestxt : "+1 to any ability score",
    vision : [["Darkvision", 30]],
    languageProfs : ["Common", "Sylvan", "Druidic"],
    age : " can live up to 500 years",
    height : " start off no larger than a doe, some grow as big as elk or bigger",
    weight : " weight between 70 lb to 250 lb",
    trait : "Dryad (+1 to any ability score)" + desc([
        "Fey: My creature type is fey, rather than humanoid.",
        "Druidic Nature: I can communicate with beasts and plants as if we share a language. I also gain the Druidcraft cantrip.",
        "Maiden's Calling: I gain a feat at 4th level, and another one at 8th level.",
        "Saints of the Emerald Queen: I gain a feat at 10th level, and another one at 14th level."
    ]),
    spellcastingBonus : [{
        name : "Druidic Nature",
        spells : ["druidcraft"],
        selection : ["druidcraft"],
        times : 1
    }],
    toNotesPage : [{
        name : "Maiden's Calling",
        note : desc([
            "I gain one of the following permanent benefits (coded as feats) when I reach 4th and 8th level:",
            "\u2022 Chaser of Light: I gain resistance to radiant damage and immunity to being blinded. My fur turns bright and sheds dim light out to 10 ft.",
            "\u2022 Shadow of Obscurity: I gain resistance to necrotic damage. Once per short or long rest while in dim light or darkness, I can blend in to become invisible for a minute, or until I attack or cast a spell. My darkvision increases by 60 ft.",
            "\u2022 Mother Nature's Embrace: I can cast Entangle, Goodberry, and Cure Wounds once per long rest each. Wisdom is my spellcasting ability. Additionally, once per turn, I can use 10 ft of movement to step into a tree and emerge from a second tree within 30 ft of it. I can carry a medium creature through without any movement penalties.",
            "\u2022 Call of the Guardian: My Strength increases by 1. I am now considered a large creature and my carry capacity is doubled. I can carry a medium creature on my back without any movement penalties.",
            "\u2022 Conflux of Distorsion: When I see a creature roll a saving throw, ability check, or attack roll within 30 ft of me, I can use my reaction to subtract or add 1d4 to the roll. I can use this a number of times equal to my Charisma modifier per short rest.",
            "\u2022 Keeper of the Emerald Crown: I gain advantage on saving throws against spells and other magical effects.",
            "\u2022 Elemental Affinity: I can choose one of the following elements and my fur color changes to match that element.",
            "   \u2022 Air: I gain a fly speed of 30 ft.",
            "   \u2022 Water: I gain resistance to cold damage. I can also breathe underwater and gain a swim speed of 60 ft.",
            "   \u2022 Earth: My Consitution increases by 1, and my total hit point maximum increases by 1 per level gained including levels previous to this feature.",
            "   \u2022 Fire: I gain resistance to fire damage. Once per short rest, when I take fire damage, I can use my reaction to gain immunity to fire damage until the end of my next turn."
        ]) 
    }, {
        name : "Saints of the Emerald Queen",
        note : desc([
            "I gain one of the following permanent benefits (coded as feats) when I reach 10th and 14th level:",
            "\u2022 Guiding Light",
            "\u2022 Darkspawn Chosen",
            "\u2022 Grove Defender",
            "\u2022 Incarnation of Chaos",
            "\u2022 Dryad Ascendance",
            "\u2022 Bulwark of Nature",
            "\u2022 Master of Elements"
        ]),
        amendTo : "Maiden's Calling" 
    }]
};

FeatsList["chaser of light"] = {
    name : "Chaser of Light",
    source : [["A:TEC", 32]],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    description : "I gain resistance to radiant damage and immunity to being blinded. My fur turns bright and sheds dim light out to 10 ft.",
    savetxt : { immune : ["blinded"] },
    dmgres : ["Radiant"]
};

FeatsList["shadow of obscurity"] = {
    name : "Shadow of Obscurity",
    source : [["A:TEC", 32]],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    description : "I gain resistance to necrotic damage. Once per short or long rest while in dim light or darkness, I can blend in to become invisible for a minute, or until I attack or cast a spell. My darkvision increases by 60 ft.",
    dmgres : ["Necrotic"],
    vision : [["Darkvision", "+60"]],
    usages : 1,
    recovery : "short rest"
};

FeatsList["mother nature's embrace"] = {
    name : "Mother Nature's Embrace",
    source : [["A:TEC", 32]],
    description : "I can cast Entangle, Goodberry, and Cure Wounds once per long rest each. Wisdom is my spellcasting ability. Additionally, once per turn, I can use 10 ft of movement to step into a tree and emerge from a second tree within 30 ft of it. I can carry a medium creature through without any movement penalties.",
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    spellcastingBonus : [{
        spellcastingAbility : 5,
        name : "Mother Nature's Embrace",
        spells : ["entangle", "goodberry", "cure wounds"],
        selection : ["entangle", "goodberry", "cure wounds"],
        times : 3,
        firstCol : "oncelr"
    }],
    usages : 1,
    recovery : "Turn"
};

FeatsList["call of the guardian"] = {
    name : "Call of the Guardian",
    source : [["A:TEC", 32]],
    description : "My Strength increases by 1. I am now considered a large creature and my carry capacity is doubled. I can carry a medium creature on my back without any movement penalties.",
    scores : [1,0,0,0,0,0],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    eval : function () { PickDropdown("Size Category", 2); },
    removeeval : function () { PickDropdown("Size Category", 3); },
};

FeatsList["conflux of distorsion"] = {
    name : "Conflux of Distorsion",
    source : [["A:TEC", 32]],
    description : "When I see a creature roll a saving throw, ability check, or attack roll within 30 ft of me, I can use my reaction to subtract or add 1d4 to the roll. I can use this a number of times equal to my Charisma modifier per short rest.",
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    usages : "Charisma modifier per",
    usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
    recovery : "short rest"
};

FeatsList["keeper of the emerald crown"] = {
    name : "Keeper of the Emerald Crown",
    source : [["A:TEC", 32]],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    description : "I gain advantage on saving throws against spells and other magical effects.",
    savetxt : { adv_vs : ["saves vs spells and other magical effects"] }
};

FeatsList["elemental affinity"] = {
    name : "Elemental Affinity",
    source : [["A:TEC", 32]],
    description : "I can choose one of the following elements and my fur color changes to match that element.",
    allowDuplicates : false,
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1}, 
    choices : ["Air", "Water", "Earth", "Fire"],
    "air" : {
        description : "I gain a fly speed of 30 ft.",
        speed : { fly : { spd : 30, enc : 20 } },
    },
    "water" : {
        description : "I gain resistance to cold damage. I can also breathe underwater and gain a swim speed of 60 ft.",
        speed : { swim : { spd : "fixed60", enc : "fixed50" } },
        dmgres : ["Cold"]
    },
    "earth" : {
        name : "My Consitution increases by 1, and my total hit point maximum increases by 1 per level gained including levels previous to this feature.",
        scores : [0,1,0,0,0,0]
    },
    "fire" : {
        description : "I gain resistance to fire damage. Once per short rest, when I take fire damage, I can use my reaction to gain immunity to fire damage until the end of my next turn.",
        dmgres : ["Fire"],
        action : ["reaction", "Elemental Affinity (fire)"],
        usages : 1,
        recovery : "short rest"
    }
};

FeatsList["guiding light"] = {
    name : "Guiding Light",
    source : [["A:TEC", 33]],
    description : "I gain a +1 to my Charisma, and the max becomes 22. I can cast the following spells at will at 1st level, requiring no material components: guiding bolt, color spray, faerie fire. I can use my action to use Step of Light to teleport to an unoccupied space within 30 ft of me.",
    scores : [0,0,0,0,0,1],
    scoresMax : [0,0,0,0,0,2],
    spellcastingBonus : [{
        name : "Guiding Light",
        spells : ["guiding bolt", "color spray", "faerie fire"],
        selection : ["guiding bolt", "color spray", "faerie fire"],
        spellcastingAbility : 6,
        times : 3,
        firstCol : "atwill"
    }],
    prerequisite : "Chaser of Light Racial Feat, Being a Dryad",
    prereqeval : function(v) { return CurrentRace.known.indexOf("dryad") !== -1 && CurrentFeats.known.indexOf("chaser of light") !== -1 ;},
    action : ["action", "Step of Light"]
};

FeatsList["darkspawn chosen"] = {
    name : "Darkspawn Chosen",
    source : [["A:TEC", 33]],
    description : "I gain a +1 to my Dexterity, and the max becomes 22. I can cast the following spells at will at 1st level, requiring no material components: darkness, see invisibility. I can see norrmally in both magical and nonmagical darknes to a range of 120 ft.",
    scores : [0,1,0,0,0,0],
    scoresMax : [0,22,0,0,0,0],
    prerequisite : "Shroud of Obscurity Racial Feat, Being a Dryad",
    prereqeval : function(v) { return CurrentRace.known.indexOf("dryad") !== -1 && CurrentFeats.known.indexOf("shroud of obscurity") !== -1 ;},
    spellcastingBonus : [{
        name : "Darkspawn Chosen",
        spells : ["darkness", "see invisibility"],
        selection : ["darkness", "see invisibility"],
        spellcastingAbility : "class",
        times : 2,
        firstCol : "atwill"
    }],
    vision : [["Greater Darkvision", "fixed120"]]
};

FeatsList["grove defender"] = {
    name : "Grove Defender",
    source : [["A:TEC", 33]],
    description : "I gain a +1 to my Wisdom, and the max becomes 22. I can cast the following spells once per long rest: plant growth, polymorph.",
    scores : [0,0,0,1,0,0],
    scoresMax : [0,0,0,22,0,0],
    prerequisite : "Mother Nature's Embrace Racial Feat, Being a Dryad",
    prereqeval : function(v) { return CurrentRace.known.indexOf("dryad") !== -1 && CurrentFeats.known.indexOf("mother nature's embrace") !== -1 ;},
    spellcastingBonus : [{
        name : "Grove Defender",
        spells : ["plant growth", "polymorph"],
        selection : ["plant growth", "polymorph"],
        spellcastingAbility : 5,
        times : 2,
        firstCol : "oncelr"
    }]
};

FeatsList["incarnation of chaos"] = {
    name : "Incarnation of Chaos",
    source :[["A:TEC", 33]],
    desription : "I can cast the following spells once per long rest requiring no material components: confusion, dimension door. Additionally, whenever I roll a 1 on an ability check or saving throw, I cantreat it as a natural 20.",
    prerequisite : "Conflux of Distorsion Racial Feat, Being a Dryad",
    prereqeval : function(v) { return CurrentRace.known.indexOf("dryad") !== -1 && CurrentFeats.known.indexOf("conflux of distorsion") !== -1 ;},
    spellcastingBonus : [{
        name : "Incarnation of Chaos",
        spells : ["confusion", "dimension door"],
        selection : ["confusion", "dimension door"],
        spellcastingAbility : 5,
        times : 2,
        firstCol : "oncelr"
    }]
};

FeatsList["dryad ascendance"] = {
    name : "Dryad Ascendance",
    source : [["A:TEC", 33]],
    description : "My Wisdom increases by 1. Additionally, I can use Fey Charm.",
    scores : [0,0,0,0,1,0],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1},
    toNotesPage : [{
        name : "Fey Charm",
        note : desc([
            "I can target one humanoid or beast that I can see within 30 ft of me. If the target can see me, it must make a Wisdom saving throw or be charmed.",
            "While charmed, I am considered its trusted friend to be heeded and protected. Although it is not under my control, it takes my requests or actions in the most favorable way it can. Anytime I or my allies harm the target, it can repeat the saving throw. This lasts for an hour.",
            "If the target succeed's its saving throw, it is immune to Fey Charm for 24 hours. I can have no more than 1 humanoid and up to 3 beasts charmed at a time."
        ])
    }]
}

FeatsList["bulwark of nature"] = {
    name : "Bulwark of Nature",
    source : [["A:TEC", 33]],
    description : "My Constitution increases by 1, up to a max of 20, and my hit point maximum increases by 15. Additionally, I become immune to poison damage and the poisoned condition.",
    scores : [0,0,1,0,0,0],
    prerequisite : "Being a Dryad",
    prereqeval : function(v) {return CurrentRace.known.indexOf("dryad") !== -1},
    dmgres : ["Poison"],
    savetxt : { immune : ["Poisoned", "Poison"]},
    calcChanges : {
        hp : function (totalHD, HDobj, prefix) {
            return [15, "Bulwark of Nature"]
        }
    }
}

SpellsList["summon greater fungi"] = {
    name : "Summon Greater Fungi",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TEC", 69]],
    school : "Conj",
    time : "1 a",
    range : "90 ft",
    level : 6,
    components : "V,S,M",
    compMaterial : "a vial filled with mycelium",
    duration : "Conc, 1 hr",
    description : "Summon giant mushroom; returns home if concentration breaks",
    descriptionFull : "You call forth a giant mushroom to aid you. It protects you and your allies and follows your verbal commands. If your concentration breaks, it returns to its home. The giant mushroom has the statistics of an awakened tree, but it is immune to poison damage, has an additional 30 hp, and can use Spore Breath." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, the giant mushroom gains an additional 15 hit points and +2 to hit and damage rolls for each level above 6th."
}

CreatureList["giant mushroom"] = {
    name : "Giant Mushroom",
    source : [["A:TEC", 60]],
    size : 1,
    type : "Plant",
    companion : ["ariadne's: the emerald crown creatures", "ariadne's companion codex"],
    alignment : "Unaligned",
    ac : 13,
    hp : 89,
    hd : [7, 12],
    speed : "20 ft",
    scores : [19,6,15,10,10,7],
    senses : "",
    passivePerception : 10,
    challengeRating : "2",
    proficiencyBonus : 2,
    attacksAction : 1,
    damage_resistances : "bludeoning, piercing",
    damage_vulnerabilities : "fire",
    damage_immunities : "poison",
    languages : "one language known by its creator",
    attacks : [{
        name : "Slam",
        ability : 1,
        damage : [3,6,"bludgeoning"],
        range : "Melee (10 ft)",
        description : "",
        abilitytodamage : false,
    }, {
        name : "Spore Breath (Recharge 5-6)",
        ability : 2,
        damage : [8, 6, "poison"],
        range : "30-ft cone",
        dc : true,
        abilitytodamage : false,
        description : "8d6 poison and poisoned, 1/2, no poisoned on save; Incapicated if crea is already poisoned",
    }],
    features : [{
		name : "False Appearance",
		description : "While the tree remains motionless, it is indistinguishable from a normal giant mushroom.",
	}],
    notes : [{
        name : "At Higher Levels",
        description : desc([
            "When casting Summon Greater Fungi at 7th level or higher, the Giant Mushroom gains an additional 15 hit points and a +2 to hit and damage rolls for each level above 6th"
        ])
    }]
}

SpellsList["blighting smite"] = {
    name : "Blighting Smite",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TEC", 69]],
    level : 3,
    school : "Evoc",
    time : "1 bns",
    range : "Self",
    components : "V",
    duration : "Conc, 1 min",
    description : "Next weapon hit +3d8+1d8/SL Necrotic dmg; save or speed 1/2, cannot regain hp; Crit and Disadv. vs Plants",
    descriptionFull : "On your next weapon hit, the attack deals an extra 3d8 necrotic damage. The target must make a Constitution saving throw or have it speed halved and cannot regain hp until the end of its next turn. When you hit a plant with a weapon imbued with this spell, it's always a critial hit and has disadvantage on the saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
}

MagicItemsList["ixion's greataxe"] = {
    name : "Ixion's Greataxe",
    source : [["A:TEC", 88]],
    type : "weapon (greataxe)",
    rarity : "artifact",
    attunement : true,
    description : "This +3 greataxe increases my critical range by 2. Additionally, it deals 2d8 dark damage on a hit. Only creatures with Necrotic immunity has resistance to this damage. See notes for removing the curse.",
    toNotesPage : [{
        name : "Removing Ixion's Curse",
        note : desc(["If I remove this curse with a remove curse spell at 9th level, I lose the additional 2d8 damage and instead gain life transference. This allows me to heal half the amount of hit points it deals on a successful attack against a creature. Alternatively, I can choose to redirect the healing to an ally with 30 ft of me"])
    }],
    weaponOptions : [{
        baseWeapon : "greataxe",
        regExpSearch : /ixion's/i,
        name : "Ixion's Greataxe",
        source : [["A:TEC", 88]],
        description : "Heavy, two-handed; +2d8 dark dmg or heal 1/2 dmg dealt if curse removed; Crit range +2",
        modifiers : [3,3],
        selectNow : true
    }]
}

/*

        THE LIBRARY OF THE UNDERSIDE

*/

CompanionList["ariadne's: the library of the underside companion codex"] = {
    name : "Ariadne's: The Library of the Underside Companion Codex",
    nameMenu : "Companion",
    source : [["A:TLotU", 0]]
}

SourceList["A:TLotU"] = {
    name : "Ariadne's: The Library of the Underside",
    abbreviation : "A:TLotU",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/05/11"
}

MagicItemsList["writ of safety"] = {
    name : "Writ of Safety",
    source : [["A:TLotU", 8]],
    type : "wondrous item",
    rarity : "rare",
    description : "This doubles as an official document and a magic scroll. It will make the Aurinoir to leave me alone, unless I am doing something obviously dangerous to the security of the City of Strings. It also functions as a Word of Recall that will bring me back to Runo's Shop, and disintegrates after being used this way. I will need to buy another one if I want to go back. See notes for Arcane Tracker.",
    toNotesPage : [{
        name : "Arcane Tracker",
        note : desc([
            "Arcane Tracker: This scoll secretly monitors my approximate location, within a margin of 100 ft. It also scries me for magical items or whoever is carrying this scroll."
        ])
    }]
}

MagicItemsList["golem wrecker"] = {
    name : "Golem Wrecker",
    source : [["A:TLotU", 9]],
    type : "weapon (light hammer)",
    rarity : "very rare",
    description : "I have a +2 bonus to attack and damage rolls made with this light hammer. Additionally, this weapon ignores resistance to bludgeoning and slashing damage, and treats immunity as if it were resistance. The crit range against constructs is increased to 17-20, and when I hit a construct, it must roll a DC 17 Constitution saving throw or fall prone and be stunned, repeating the save at the end of each of its turns.",
    weaponOptions : [{
        name : "Golem Wrecker",
        regExpSearch : /golem wrecker/i,
        baseWeapon : "light hammer",
        modifiers : [2,2],
        description : "Light, thrown; Crit range 17-20 vs. Constructs; On hit vs. Construct, Con save or fall prone and stunned",
        selectNow : true
    }]
}

MagicItemsList["arcanadex device"] = {
    name : "Arcanadex Device",
    source : [["A:TLotU", 9]],
    type : "wondrous item",
    rarity : "rare",
    description : "I can place a sample of any organic matter inside of it through its detachable bronze and glass display. It takes one minute to process, and I learn some information about the creature the sample belonged to: creature type, damage resistances, immunities, and vulnerabilities. If the sample is in good condition I might learn more at DM's discretion."
}

MagicItemsList["bundle of dried eldermint"] = {
    name : "Bundle of Dried Eldermint",
    source : [["A:TLotU", 10]],
    type : "consumable",
    rarity : "rare",
    description : "I can chew, inhale, or drink this eldermint. Chewing grants me a +1 to my Prof. bonus for 1 hour. Inhaling grants me immunity to poison and disease for one hour, and any poisons and diseases I have currently are only suspended. I can drink tea infused with this, and I gain a +2 bonus to all ability checks for one hour."
}

MagicItemsList["caustic flame"] = {
    name : "Caustic Flame",
    source : [["A:TLotU", 10]],
    type : "weapon (pistol)",
    rarity : "legendary",
    attunement : true,
    description : "This +3 pistol deals a base of 1d8 acid plus 1d8 fire damage instead of the normal 1d10 piercing damage. Creatures hit takes this damage again at the start of their next turn as the flaming acid burns through them. It uses no bullets, but instead I must refill its glass chamber with a vial of acid worth at least 25 GP, and has enough to shoot 10 times before reloading again.",
    weaponOptions : [{
        name : "Caustic Flame",
        regExpSearch : /caustic flame/i,
        baseWeapon : "pistol",
        modifiers : [2,2],
        damage : [1, 8, "acid"],
        description : "Vial of Acid, loading; +1d8 fire dmg; Crea hit take dmg start of their next turn",
        selectNow : true
    }]
}

FeatsList["counterspell mastery"] = {
    name : "Counterspell Mastery",
    source : [["A:TLotU", 17]],
    prerequisite : "Counterspell",
    prereqeval : function(v) {
        return isSpellUsed('counterspell', true)
    },
    description : "My range for counterspell is increased to 80 ft. At 11th level, its increased to 100 ft, and at 17th level to 120 ft. I can treat spells casted with a slot level one higher than when I used to cast counterspell to be counterspelled and automatically nullified.",
    calcChanges : {
        spellAdd : [
            function(spellKey, spellObj, spName) {
                if(spellKey === "counterspell") {
                    var cLvl = Number(What('Character level'));
                    spellObj.range = (cLvl < 11 ? "80" : cLvl < 17 ? "100" : "120") + " ft";
                }
            }
        ]
    }
}

FeatsList["heroic intervention"] = {
    name : "Heroic Intervention",
    source : [["A:TLotU", 17]],
    description : "I get a +1 to one of my ability scores. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
    choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
	"strength" : {
		description : "I gain a +1 to Strength. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [1, 0, 0, 0, 0, 0],
	},
	"dexterity" : {
		description : "I gain a +1 to Dexterity. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [0, 1, 0, 0, 0, 0],
	},
	"constitution" : {
		description : "I gain a +1 to Constitution. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [0, 0, 1, 0, 0, 0],
	},
	"intelligence" : {
		description : "I gain a +1 to Intelligence. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [0, 0, 0, 1, 0, 0],
	},
	"wisdom" : {
		description : "I gain a +1 to Wisdom. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [0, 0, 0, 0, 1, 0],
	},
	"charisma" : {
		description : "I gain a +1 to Charisma. As a reaction when an ally within 30 ft of me is knocked unconscious ot killed, I can move up to half my max speed and take an action. I can do so once per long rest.",
		scores : [0, 0, 0, 0, 0, 1],
	},
    usages : 1,
    recovery : "long rest"
}

FeatsList["eldritch killer"] = {
    name : "Eldritch Killer",
    source : [["A:TLotU", 17]],
    description : "I gain a +1 to either Wisdom or Charisma. I have advantage on either Wisdom or Charisma saving throws caused by aberrations and undead creatures. My crit range against aberrations and undead is increased by 1, up to a max of 17.",
    choices : ["Wisdom", "Charisma"],
    "wisdom" : {
        description : "I gain a +1 to Wisdom. I have advantage on Wisdom saving throws caused by aberrations and undead creatures. My crit range against aberrations and undead is increased by 1, up to a max of 17.",
        scores : [0, 0, 0, 0, 1, 0],
		saves : ["Wis"],
        savetxt : { adv_vs : ["Wisdom saves from Aberrations and Undead"] }
    },
    "charisma" : {
        description : "I gain a +1 to Charisma. I have advantage on Charisma saving throws caused by aberrations and undead creatures. My crit range against aberrations and undead is increased by 1, up to a max of 17.",
        scores : [0, 0, 0, 0, 0, 1],
		saves : ["Cha"],
        savetxt : { adv_vs : ["Charisma saves from Aberrations and Undead"] }
    }
}

FeatsList["unassailable wit"] = {
    name : "Unassailable Wit",
    source : [["A:TLotU", 18]],
    prerequisite : "15 or higher Intelligence",
    prereqeval : function(v) {
        return What('Int') >= 13;
    },
    description : "I gain a +1 to Intelligence. Whenever a spell or magical effects subjects me to a Wisdom or Charisma saving throw, I can make it an Intelligence saving throw instead. I can do so my Prof. bonus per long rest (Rounded down).",
    scores : [0,0,0,1,0,0],
    usages : "1/2 Prof. bonus per ",
    usagescalc : "event.value = Math.floor(Number(How('Proficiency Bonus'))/2);",
    recovery : "long rest"
}

FeatsList["shield of conjuration"] = {
    name : "Shield of Conjuration",
    source : [["A:TLotU", 18]],
    prerequisite : "Shield spell",
    prereqeval : function(v) {
        return isSpellUsed('shield', true);
    },
    description : "My Intelligence or Charisma increases by 1. When I have the shield spell active, whenever a magic missle or ranged attack is blocked by it, I can make a ranged spell attack (60/120 ft) against a creature of my choice. On a hit the creature suffers the damage from the original attack.",
    choices : ["Intelligence", "Charisma"],
    "intelligence" : {
        description : "My Intelligence increases by 1. When I have the shield spell active, whenever a magic missle or ranged attack is blocked by it, I can make a ranged spell attack (60/120 ft) against a creature of my choice. On a hit the creature suffers the damage from the original attack.",
		scores : [0, 0, 0, 1, 0, 0],
	},
    "charisma" : {
        description : "My Charisma increases by 1. When I have the shield spell active, whenever a magic missle or ranged attack is blocked by it, I can make a ranged spell attack (60/120 ft) against a creature of my choice. On a hit the creature suffers the damage from the original attack.",
        scores : [0, 0, 0, 0, 0, 1],
    },
    weaponOptions : [{
        name : "Shield of Conjuration",
        regExpSearch : /shield of conjuration/i,
        source : [["A:TLotU", 18]],
        damage : ["", "", ""],
        type : "Spell",
        abilitytodamage : false,
        range : "60/120 ft",
        special : true,
        isNotWeapon : true,
        useSpellcastingAbility : true,
        ability : 4,
        description : "Reflect missed atks, spell atk vs crea, dmg equals the missed atk",
        selectNow : true
    }]
}

FeatsList["resilient companionship"] = {
    name : "Resilient Companionship",
    source : [["A:TLotU", 18]],
    description : "I gain a +1 to my Charisma, and a +1 bonus to all saving throws for every ally within 10 ft of me that isn't incapacitated up to a max of +3. If an ally and I are within 5 ft of each other are subject to making a Strength or Dexterity saving throw, my ally can use my result instead of theirs. I can use this once per long rest.",
    scores : [0,0,0,0,0,1],
    usages : 1,
    recovery : "long rest"
}

MagicItemsList["wand of gold and garlic"] = {
    name : "Wand of Gold and Garlic",
    source : [["A:TLotU", 21]],
    type : "wand",
    rarity : "very rare",
    attunement : true,
    description : "This Cursed wand has +2 bonus to spell attacks and spell save DC. When I use this wand, all cloud-based spells smell like garlic and deal double damage to creatures of vampiric origin. This wand can transmute heads of garlic into gold, and nothing else.",
    descriptionFull : "This Cursed wand has +2 bonus to spell attacks and spell save DC. When I use this wand, all cloud-based spells smell like garlic and deal double damage to creatures of vampiric origin.\n   " + toUni("Curse") + ". For every 100 heads of garlic transmuted into gold, the next time I attempt to transmute, I must succeed on a DC 18 Charisma saving throw or be turned into a mound of golden sand, killing me instantly.",
    cursed : true,
    calcChanges : {
        spellCalc : [
            function (type, spellcasters, ability) {
                if (type !== "prepare") return 2;
            },
            "while attuned to this wand, I gain a +2 to spell attack and spell save DC."
        ]
    }
}

MagicItemsList["tome of primeval and deep speech"] = {
    name : "tome of primeval and deep speech",
    source : [["A:TLotU", 18]],
    type : "wondrous item",
    rarity : "rare",
    description : "I can spend 40 hours to learn primeval, not to be confused with primordial, the language of elementals. Primeval is accredited to be the first language, and used for most spells and arcanism were first devised. After reading the first part, I can spend another 40 hours learning deep speech.",
    languageProfs : [["Primeval", 1], ["Deep Speech", 1]],
}

MagicItemsList["mechanical pseudodragon"] = {
    name : "Mechanical Psudodragon",
    source : [["A:TLotU", 22]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true,
    description : "I must be authorized by the Aurinoir to keep a Mechanical Pseudodragon as it's seen as a symbol of power and influence within the City of Strings. Only an upcated 9th level Arcane Rescripting can twist this creature against their will, turning them evil and genocidal in nature.",
    choices : ["Very Rare (CR 5)", "Legendary (CR 6)", "Artifact (CR 8)"],
    "very rare (cr 5)" : {
        name : "Combustion Mechanical Pseudodragon",
        description : "I must be authorized by the Aurinoir to keep a Combustion Mechanical Pseudodragon as it's seen as a symbol of power and influence within the City of Strings. Only an upcated 9th level Arcane Rescripting can twist this creature against their will, turning them evil and genocidal in nature.",
        creaturesAdd : [["Combustion Mechnical Dragon"]]
    },
    "legendary (cr 6)" : {
        name : "Mechanical Pseudodragon",
        description : "I must be authorized by the Aurinoir to keep a Mechanical Pseudodragon as it's seen as a symbol of power and influence within the City of Strings. Only an upcated 9th level Arcane Rescripting can twist this creature against their will, turning them evil and genocidal in nature.",
        creaturesAdd : [["Mechnical Pseudodragon"]]
    },
    "artifact (cr 8)" : {
        name : "Caustic Mechanical Pseudodragon",
        description : "I must be authorized by the Aurinoir to keep a Caustic Mechanical Pseudodragon as it's seen as a symbol of power and influence within the City of Strings. Only an upcated 9th level Arcane Rescripting can twist this creature against their will, turning them evil and genocidal in nature.",
        creaturesAdd : [["Caustic Mechanical Pseudodragon"]]
    }
}

CreatureList["mechanical pseudodragon"] = {
    companion : ["ariadne's: the library of the underside companion codex", "ariadne's companion codex"],
    name : "Mechanical Psudodragon",
    source : [["A:TLotU", 23], ["A:CoS", 0]],
    size : 2,
    type : "Construct",
    alignment : "Neutral Evil",
    ac : 15,
    hp : 67,
    hd : [15, 6],
    speed : "30 ft, fly 60 ft",
    scores : [8, 17, 12, 18, 12, 15],
    skills : {
        "Deception" : 5
    },
    senses : "Darkvision 240ft",
    languages : "Common, primeval, deep speech, draconic",
    challengeRating : "6",
    proficiencyBonus : 3,
    attacksAction : 2,
    attacks : [{
        name : "Talons",
		ability : 2,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)"
    }, {
        name : "Bite",
        ability : 2,
        damage : [1, 6, "piercing"],
        range : "Melee (10 ft)",
        description : "+1d4 lightning dmg"
    }, {
        name : "Electrobolt",
        ability : 4,
        damage : [2, 4, "lightning"],
        range : "60 ft",
        description : "Ranged Spell Attack",
    }, {
        name : "Electrostatic Breath (recharge 5-6)",
        ability : 4,
        damage : [6, 4, "lightning"],
        range : "15-ft cone",
        description : "Dex save; Save halves; Failed -10 ft movement, no reac. til end of their next turn",
        dc : true
    }],
    traits : [{
        name : "Multiattack",
        description : "This creature makes two attacks: one with its talons, and one with its bite or electrobolt",
    }, {
        name : "Overpowering Swarm",
        description : "When 2 or more allies are within 15 ft of a target, the Mechanical Pseudoragon has advantage on all attack rolls."
    }, {
        name : "Duplicitous Activity",
        description : "The Mechanical Pseudodragon has advantage on Deception checks to hide its true objective."
    }, {
        name : "Genocidal Hive",
        description : "This creature has an overpowering drive to build more of itself and destroy all non-mechnical, non-dragonic life. It will always choose its objective over its friends, allies, and treasure to achieve cosmic domination."
    },{
        name : "Lightning Dependence",
        description : "Whenever this creature takes 10 or more lightning damage, it takes no damage instead and regains a number of hp equal to the damage. It must absorb at least 10 lightning damage from another source other than its own once a day or it goes dormant until its recharged."
    }]
}

CreatureList["combustion mechanical pseudodragon"] = {
    companion : ["ariadne's: the library of the underside companion codex", "ariadne's companion codex"],
    name : "Combustion Mechanical Psudodragon",
    source : [["A:TLotU", 23], ["A:CoS", 0]],
    size : 2,
    type : "Construct",
    alignment : "Neutral Evil",
    ac : 15,
    hp : 67,
    hd : [15, 6],
    speed : "30 ft, fly 60 ft",
    scores : [8, 17, 12, 18, 12, 15],
    skills : {
        "Deception" : 5
    },
    senses : "Darkvision 240ft",
    languages : "Common, primeval, deep speech, draconic",
    challengeRating : "5",
    damage_resistances : "fire",
    proficiencyBonus : 3,
    attacksAction : 2,
    attacks : [{
        name : "Talons",
		ability : 2,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)"
    }, {
        name : "Bite",
        ability : 2,
        damage : [1, 6, "piercing"],
        range : "Melee (10 ft)",
        description : "+1d4 lightning dmg"
    }, {
        name : "Electrobolt",
        ability : 4,
        damage : [2, 4, "lightning"],
        range : "60 ft",
        description : "Ranged Spell Attack",
    }, {
        name : "Incinerating Breath (recharge 5-6)",
        ability : 4,
        damage : [4, 4, "fire"],
        range : "15-ft cone",
        description : "Dex save; Save halves; Failed crea(s) incinerated, 2d4 fire dmg start of each turn for 1 min, action to put out",
        dc : true
    }],
    traits : [{
        name : "Multiattack",
        description : "This creature makes two attacks: one with its talons, and one with its bite or electrobolt",
    }, {
        name : "Overpowering Swarm",
        description : "When 2 or more allies are within 15 ft of a target, the Mechanical Pseudoragon has advantage on all attack rolls."
    }, {
        name : "Duplicitous Activity",
        description : "The Mechanical Pseudodragon has advantage on Deception checks to hide its true objective."
    }, {
        name : "Genocidal Hive",
        description : "This creature has an overpowering drive to build more of itself and destroy all non-mechnical, non-dragonic life. It will always choose its objective over its friends, allies, and treasure to achieve cosmic domination."
    },{
        name : "Combustion Dependence",
        description : "This creature is resistance to fire damage, and must consume 4 lbs. of coal per day or fall dormant until its combustion system is reignited."
    }]
}

CreatureList["caustic mechanical pseudodragon"] = {
    companion : ["ariadne's: the library of the underside companion codex", "ariadne's companion codex"],
    name : "Caustic Mechanical Psudodragon",
    source : [["A:TLotU", 23], ["A:CoS", 0]],
    size : 2,
    type : "Construct",
    alignment : "Neutral Evil",
    ac : 15,
    hp : 112,
    hd : [25, 6],
    speed : "30 ft, fly 60 ft",
    scores : [8, 17, 18, 18, 12, 15],
    skills : {
        "Deception" : 5
    },
    senses : "Darkvision 240ft",
    languages : "Common, primeval, deep speech, draconic",
    challengeRating : "8",
    damage_resistances : "fire",
    proficiencyBonus : 3,
    attacksAction : 2,
    attacks : [{
        name : "Talons",
		ability : 2,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)"
    }, {
        name : "Bite",
        ability : 2,
        damage : [1, 6, "piercing"],
        range : "Melee (10 ft)",
        description : "+1d4 lightning dmg"
    }, {
        name : "Electrobolt",
        ability : 4,
        damage : [2, 4, "lightning"],
        range : "60 ft",
        description : "Ranged Spell Attack",
    }, {
        name : "Electrostatic Breath (recharge 5-6)",
        ability : 4,
        damage : [6, 4, "lightning"],
        range : "15-ft cone",
        description : "Dex save; Save halves; Failed -10 ft movement, no reac. til end of their next turn",
        dc : true
    }, {
        name : "Caustic Flames (recharge 5-6)",
        ability : 4,
        damage : [4, 4, "fire"],
        range : "15-ft cone",
        description : "Dex save; +4d4 acid dmg; Save halves; Failed, 2d4 fire + 2d4 acid dmg start of each turn for 1 min, action to put out",
        dc : true 
    }],
    damage_resistances : "acid",
    traits : [{
        name : "Multiattack",
        description : "This creature makes two attacks: one with its talons, and one with its bite or electrobolt",
    }, {
        name : "Overpowering Swarm",
        description : "When 2 or more allies are within 15 ft of a target, the Mechanical Pseudoragon has advantage on all attack rolls."
    }, {
        name : "Duplicitous Activity",
        description : "The Mechanical Pseudodragon has advantage on Deception checks to hide its true objective."
    }, {
        name : "Genocidal Hive",
        description : "This creature has an overpowering drive to build more of itself and destroy all non-mechnical, non-dragonic life. It will always choose its objective over its friends, allies, and treasure to achieve cosmic domination."
    },{
        name : "Energetic Independence",
        description : "Whenever this creature takes 10 or more lightning damage, it takes no damage instead and regains a number of hp equal to the damage. It must absorb at least 10 lightning damage from another source other than its own once a day or it goes dormant until its recharged. Or, it can consume a vial of acid to sustain itself. It also has resistance to acid damage."
    }]
}

MagicItemsList["pauldrons of villainous opulence"] = {
    name : "Pauldrons of Villainous Opulence",
    source : [["A:TLotU", 22]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true,
    cursed : true,
    description : "These cursed pauldrons turn any suit of armor they are affixed to into a suit of fine plate armor +3. I cannot unattune to these pauldrons, and cannot remove them from the armor. Every sapient creature in a 30-ft sphere perceives me as decadently wealthy, wasteful, and unlikeable. Non-sapient creatures don't trust me and are threatened by my presence. This item is senient and will try to turn my allies, friends, and family against me.",
    armorAdd : "Pauldrons",
	armorOptions : [{
		regExpSearch : /^(?=.*pauldrons).*$/i,
		name : "Pauldrons",
		source : [["A:TLotU", 22]],
		type : "heavy",
		ac : 18,
		stealthdis : true,
		weight : 40
	}]
}

SpellsList["arcane cuffs"] = {
    name : "Arcane Cuffs",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 24]],
    level : 2,
    school : "Abjur",
    time : "1 a",
    range : "Touch",
    duration : "1 hr",
    components : "S,M",
    compMaterial : "an ingot of polished silver, which the spell consumes",
    description : "Crea save using its spell ability vs own save DC or cannot cast 2+1/SL level or lower spells; Restrained have Disadv; Incap. auto fail; Dur. 8hr 4/SL, 24hr 6/SL",
    descriptionFull : "A creature must succeed on a saving throw usings its own spellcasting ability and save DC. On a failed save, the creature cannot cast spells of 2nd level or lower for the duration. A Restrained creature has disadvantage on the save, and an Incapacitated creature automatically fails." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the target is unable to cast spells of the slot's level or lower. Additionally, the duration increases to 8 hours at 4th level or higher and 24 hours at 6th level or higher."
}

SpellsList["greater identify"] = {
    name : "Greater Identify",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 24]],
    level : 3,
    school : "Div",
    time : "10 min",
    range : "Touch",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "A pearl worth at least 500 gp and an owl feather",
    description : "magic item/imbued crea/obj; learn properties, use, affecting spells, prev. 3 users and their actions, traps/malicious design, created by spell; Crea, learn 3 highest spells and last spell casted",
    descriptionFull : "I choose one magical item or magic-imbued object or creature. I learn its properties and how to use them, whether or not it requires attunement, and how many charges it has, if any. I learn the identities of its three previous users, and the most significant actions they took with it. I also learn any hidden compartments, traps, or malicious design concealed within the object. I learn if any spells are affecting the item and what they are. If the item was created by a spell, I learn which spell created it. Additionally, I decipher compatibilities and dissonances of the object with different magical auras, learning if the item would react to planar energies such as chaotic, lawful, good, and evil aura and effects. If it's a creature, I learn what spells or magical effects, if any, are currently affecting it. I also learn the three highest level spells the creature can cast, and the lasat spell it casted."
}

SpellsList["arcane rescripting"] = {
    name : "Arcane Rescripting",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 24]],
    level : 4,
    school : "Omni",
    time : "1 min",
    range : "Touch",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "A shard of fine opal worth at least 100 gp, which the spell consumes",
    description : "I give instructions up to 30 words to a Construct; Save if unwilling, or bound to my orders for 24hrs, 7/SL a week, 9/SL permanently"
}

SpellsList["magisteal"] = {
    name : "Magisteal",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 25]],
    level : 5,
    school : "Omni",
    time : "1 rea",
    timeFull : "1 reaction when I see a creature cast a spell or magical effect",
    range : "30 ft",
    duration : "8 hr",
    components : "S,M",
    compMaterial : "the eye of a hawk",
    description : "Replicate spell/magical effect 5+1/SL or lower as if I casted it, unless it was also created by another Magisteal",
    descriptionFull : "I can save an arcane snapshot of a spell or magical effect of 5th level or lower that I witness within range. For the duration, I can consumee the snapshot to replicate the magic as if I were its source, maintaining all its original effects, damage, and DCs, if any. Once I do so, the spell ends. I cannot use this spell to save a snapshot of an effect being replicated by Magisteal. If the magic is a magical effect, it is up to the DM to decide what level the effect is. It's recommended to divide the CR of the creature creating the effect by 2, rounding up." + AtHigherLevels + "When I cast this spell using a spell slot of 6th level or higher, I can copy a spell or magical effect if its level is less or equal to the level of spell slot used."
}

SpellsList["mantle of bodily safety"] = {
    name : "Mantle of Bodily Safety",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 25]],
    level : 5,
    school : "Abjur",
    time : "1 a",
    range : "Touch",
    duration : "Conc, 10 min",
    components : "V,S,M",
    compMaterial : "a purple diamond worth at least 300 gp",
    description : "1 Crea immune to form altering spell/effect; Crea(s) in 15ft radius adv. on saves vs. altering form spell/effect; Dur. 1hr 6+/SL",
    descriptionFull : "A creature I touch is wreathed in an ethereal cloak of protective light, rendering them completely immune to spells or magical effects that would alter their form, such as the polymorph spell or a Medusa's petrifying gaze. Creatures within 15 feet of the Creature are also aided by its magic, gaining advantage on saving throws against spells or magical effects that would alter their form." + AtHigherLevels + "When I cast this spell using a spell slot of 6th level or higher, the maximum duration is increased to 1 hour."
}

SpellsList["confiscate"] = {
    name : "Confiscate",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 25]],
    level : 6,
    school : "Abjur",
    time : "1 a",
    range : "30 ft",
    duration : "Conc, 1 min",
    components : "S,M",
    compMaterial : "a platinum magnet",
    save : "Cha",
    description : "1 wondrous item; Crea attuned, save or interrupted until I lose conc; Break attune after 1 min, I can instant attune, unless sentient/Artifact or 9/SL; 1 bns pull 30 ft Athletics check vs my spell save DC",
    descriptionFull : "I target a wondrous item I can see within range. If a creature is attuned to it, they must succeed a Charisma saving throw or have their attunement interrupted for as long as I maintain concentration on the spell. If I concentrate for the full minute, their attunement is broken and I can choose to instantly attune to it in their stead. Sentient items or Artifacts are unaffected, unless I cast this spell using a 9th level spell slot. Additionally, while I concentrate on this spell, I can use my bonus action to magically pull the targeted item 30 feet towards me, catching it if I have a free hand to do so when it reaches me. If a creature is carrying it, it must make a Strength (Athletics) check against my spell save DC to prefvent the item from being torn from their possession."
}

SpellsList["mass modify memory"] = {
    name : "Mass Modify Memory",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 26]],
    level : 9,
    school : "Ench",
    time : "8 hr",
    range : "S:25-mi rad",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "an opalescent gem worth at least 10,000 gp",
    save : "Int",
    description : "Crea(s) Int>19 save or forget event; Gem stores forgotten memories (AC 25, 100hp, immune all but force); Contradict info allow Crea(s) save; Crea(s) disadv. on Int, Wis, Cha rolls vs my spells; See B",
    descriptionFull : "I can muddle the memories of every creature within a 25 mile radius centered on me, changing their recollection of an event they learned about or witnessed within the past month. I can choose to eliminate all memory of the event, change the details, or create a memory of another event to replace it. A modified memory doesn't affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical memory might be dismissed as a bad dream. Creatures with a 20 or higher Intelligence score can save to resist these effects, and are aware of the attempt. All stolen memories are transferred to the gem which darkens with the weight of the contained information. Creatures affected by this spell have disadvantage on Intelligence, Wisdom, and Charisma rolls to discern my intentions or resist my spells. If the creature encounters new information that contradicts the modified memory, it can attempt to save to recover them. On a failure, the creature discards it as a mistake or a lie. The gem is a magical object with 100 hp, an AC of 25, and immunity too all damage except force. If the gem is destroyed, all creatures affected by the spell recover their memory and become aware of my manipulation",
}

SpellsList["kara's neural needle"] = {
    name : "Kara's Neural Needle",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 27]],
    level : 9,
    school : "Evoc",
    time : "1 a",
    range : "60 ft",
    duration : "Instantaneous",
    components : "S",
    description : "Choose 1 from B. effect crea for 1 week; 12d10 psychic, save halves and no effects; No effect crea psychic immunity",
    save : "Int",
    descriptionFull : "I target the mind of a creature within range with a sharp pulse of psychci energy, attempting to destroy its mind. The creature must make an Intelligence saving throw and suffer deep neural damage. On a failure, they take 12d10 psychic damage. On a success, they take half damage and are not affects by the spell's other effects. I can choose one of the following to afflictions to affect the creature for the next week. Creatures with psychic immunity are unaffected by this spell." + "\n    " + toUni("Paraplegia") + ":  Basic motor skills become incredibly difficult. The target's walking speed is reduced to 5 feet, and have disadvantage on Dexterity checks, weapon, and unarmed attacks." + "\n    " + toUni("Time Agnosia") + ": The target's ability to track time start to break down. The target cannot sleep unless induced by medicine or magic, and they are unable to make plans that require projecting actions into the future." + "\n    " + toUni("Retrograde Amnesia") + ": A deep loss of memories affects the target's mind, making them forget their acquaintances, friends, and family. They still instinctively protect their allies, and a natural mistrust of enemies, but can be easily manipulated away from these institutions." + "\n    " + toUni("Anterograde Amnesia") + ": The target can remember its past, but has difficulty in learning new things. They are unable to recall any information learned after the casting of this spell." + "\n    " + toUni("Apathetic Depression") + ": The target loses the capability for feeling emotion, making them deeply unempathetic and cold. They have disadvantage on all Charisma checks and become deeply miserable." + "\n    " + toUni("Sensory Loss") + ": The target's senses are extremely dulled. They lose all special senses (such as darkvision or blindsense), have disadvantage on Perception checks, and cannot see, hear, or smell anything beyond 30 feet." + "\n    " + "A Greater Restoration reduces the duration of the effects by 1d4 days."
}

MagicItemsList["curseblade"] = {
    name : "Curseblade",
    source : [["A:TLotU", 39]],
    type : "weapon (any melee)",
    rarity : "artifact",
    attunement : true,
    description : "This weapon has a +3 bonus to attack and damage rolls, ignores resistance to its main damage type (a longsword with slashing ignores slashing resistance), and scores a critical hit on a 15-20. See notes for Curseblade's Curse.",
    chooseGear : {
		type : "weapon",
		prefixOrSuffix : "suffix",
		descriptionChange : ["replace", "weapon"],
        // exclude anything that is not a melee weapon
		excludeCheck : function (inObjKey, inObj) {
			return !/\bmelee\b/i.test(inObj.range);
		}
	},
    calcChanges : {
        atkAdd : [
            function(fields,v) {
                if((/curseblade/i).test(v.WeaponTextName)) {
                    var dmg = fields.Damage_Type ;
                    fields.Description += (fields.Description ? '; ' : '') + "Crit on 15-20; " + "Ignores " + dmg + " resistance"; 
                }
            }
        ],
        atkCalc : [
            function(fields, v, output) {
                if((/curseblade/i).test(v.WeaponTextName)) {
                    output.magic += 3;
                }
            }
        ]
    },
    toNotesPage : [{
        name : "Sacrifical Sentience",
        note : desc([
            "Detection: When I first grab this waepon, I will experience a violet flash that lasts less than a second. An identify spell reveals this items curse and its specific effects. While using it, it is clear that each critical hit comes easier than the last.",
            "Activation and Effects: When I attune to this weapon with this curse, I am unable to end the attunement, but have no obligation to keep using it. The weapon will then introduce itself, revealing its sentience and stating its intention to help the user 'find the right mark'.",
            "In addition to any effects the weapon might have aside from its Sacrifical Sentience, my critical range is increased based on the weapon's rarity. The weapon's cursed properties are empowered by critical strikes. For every critical hit rolled with this weapon, it gains a charge, up to a max of 10 charges. When I roll a natural one on an attack roll with this weapon, it will attempt to take my vitality.",
            "I must make a Constitution saving throw with a DC of 10 + 3 for every charge the weapon currently has up to a max save DC of 30. On a failure, I take necrotic damage equal to 10 times the amount of charges this weapon holds. On a success, I take only half damage and the weapon loses all of its charges. If I am reduced to 0 hp, I am instantly killed, and the weapon gains an additional +1 to hit and damage rolls.",
            "Dispelling and Attunement: A curse of Sacrifical Sentience can only be dispelled by destroying the magical item that houses the evil awareness causing it. Depending on the power of the item, this could be a very difficult process, which is why many of these are simply abandoned or locked away.",
            "If the weapon is abandoned or kept at least 120 feet away from me for a week, the attunement is broken, rendering the blade free to find another wielder."
        ])
    }, {
        name : "Curseblade's Curse",
        note : desc([
            "When I drop below half my total hp, I must make a DC 20 Charisma saving throw. On a failure, my soul is absorbed by the weapon and I am instantly killed. On a success, I am immune to the Curseblade's Sacrifical Sentience for the next 24 hours, including on critical failure effects."    
        ])
    }]
}

SpellsList["omission"] = {
    name : "Omission",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 44]],
    level : 2,
    school : "Omni",
    time : "1 a",
    range : "30 ft",
    duration : "1 hr",
    save : "Wis",
    components : "V,S",
    description : "Choose subject (person, place, or idea), not too broad/ingrained (breathing/running); 1 Crea save or cannot produce thoughts about subject",
    descriptionFull : "I target a creature within range with a disruptive psychic arcana, carried over by my words. When I cast this spell, I choose a subject to be omitted by the thought process of the creature. This subject can be a person, place, or an idea, as long as it isn't too broad or too ingrained as a basic part of the target's psyche, such as breathing or running. The creature must succeed on a Wisdom saving throw or be unable to autonomously produce any thoughs involving the chosen omission. If an event, such as hearing the name of the barred creature, brings the omission to the forefront of the affected creature's mind, the spell ends."
}

SpellsList["mindblast"] = {
    name : "Mindblast",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 44]],
    level : 2,
    school : "Evoc",
    time : "1 a",
    range : "30 ft",
    duration : "1 hr",
    save : "Int",
    components : "V,S",
    description : "Crea Int>3 save or 2d10+1d10/SL psychic dmg; Incapacitated til end of next turn; Stunned if failed by 5 or more",
    descriptionFull : "I launch a powerful burst of disruptive psychic waves at a creature within range. The target must succeed on an Intelligence saving throw or take 2d10 psychic damage and be Incapacitated until the end of their next turn. If they fail by 5 or more, they are Stunned instead. The spell has no effect on creatures with an Intelligence score lower than 3." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
}

SpellsList["blindspot"] = {
    name : "Blindspot",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 44]],
    level : 3,
    school : "Ench",
    time : "1 a",
    range : "60 ft",
    duration : "Conc, 1 hr",
    save : "Wis",
    components : "V,S,M",
    compMaterial : "a small vial of black oil",
    description : "Spell ability mod. Crea(s), save or be blind to 1+1/SL crea/obj < 10ft cube; Crea(s) can touch/smell/hear, all but sight",
    descriptionFull : "I target a number of creatures up to my spellcasting ability modifier with a visual enchantment, creating a blindspot in their vision for a particular thing. Each creature must succeed a Wisdom saving throw or become blind to a single object or creature of my choice that is no larger than a 10-ft cube. This can be a door, an enemy, a lever, etc. A creature is unaware of this manipulation and its vision fills the missing space with a suitably inconspicuous background. A creature affected by this spell can interact with the blindspot normally in every way except sight; it can touch, smell, and hear it even through it appears to be invisible to the creature for the duration." + AtHigherLevels + "When I cast this spell using a spell slot of 4th level or higher, I can create on additional blindspot for each slot level above 3rd, up to a max of 5."
}

SpellsList["fate denial"] = {
    name : "Fate Denial",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 45]],
    level : 4,
    school : "Omni",
    time : "1 rea",
    timeFull : "1 reaction, which I take when I fail a saving throw",
    range : "Self",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "a fractal-shaped crystal",
    description : "Roll save again and  my spellcasting ability modifier to the roll; Must use the new roll",
}

SpellsList["greater darkness"] = {
    name : "Greater Darkness",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 45]],
    level : 5,
    school : "Evoc",
    time : "1 a",
    range : "60 ft",
    duration : "Conc, 1 min",
    components : "V,S,M",
    compMaterial : "an obsidian shard",
    description : "60-ft rad fills with darkness;  my spellcasting ability modifier Crea(s) sees through; Light 6/SL< dispelled"
}

SpellsList["distort timeline"] = {
    name : "Distort Timeline",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 45]],
    level : 7,
    school : "Omni",
    time : "1 a",
    range : "120 ft",
    duration : "1 rnd",
    components : "V,S,M",
    compMaterial : "an antique stopwatch worth at least 1000 gp",
    save : "Cha",
    description : "Create save point; Use reac. retun to save; recovers all lost resources; Cha save to resist",
    descriptionFull : "I create a magical snapshot of all that happens within 120 feet of my from the moment I cast this spell until the end of my next turn, creating a save point. During that time period, I can make all objects and willing creatures return to the state of the save point as a reaction, changing to their original position and recovering any lost resources, such as hp and spell slots. An unwilling creature can attempt to resist the reset with a successful Charisma saving throw. All creatures are aware of this change. I can choose not to return to the save point and let time continue by not using my reaction, but the spell slot is still consumed. The spell only affects things within range. If a creature or object is further than 120 feet away from me when I return to the save point, it does not change positions or state, regardless of its circumstances when I started to record the save point."
}

SpellsList["fumes of insanity"] = {
    name : "Fumes of Insanity", 
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:TLotU", 45]],
    level : 8,
    school : "Omni",
    time : "1 a",
    range : "60 ft",
    duration : "Conc, 1 min",
    components : "V,S,M",
    compMaterial : "a purple glass shard",
    description : "20-ft rad; Crea enter or start turn make Wis, Con, and Cha saves; See B. for fail effects",
    descriptionFull : "I create a 20-foot radius sphere of swirling, neon-colored fumes centered on a point within range. Creatures that enters the area for the first time or start their turn must make a Wisdom, Constitution, and Charisma saving throw." + "\n    " + toUni("Wisdom fail") + ": the creature is hypnotized by the swirling colors, becoming incapacitated and having their speed reduced to 0. This effect ends for an affected creature if it takes more than 15 points of damage from a single source." + "\n    " + toUni("Constitution fail") + ": the toxicity of the fumes deal 3d8 poison damage to the creature and applies the poisoned condition until they leave the cloud or succeed this saving throw on a subsequent turn." + "\n    " + toUni("Charisma fail") + ": the fumes break something inside the creature's mind, who must roll on the short-term madness table to determine the effect they suffer for the next 1d10 minutes."
}

MagicItemsList["tincture of red"] = {
    name : "Tincture of Red",
    source : [["A:TLotU", 48]],
    type : "potion",
    rarity : "rare",
    description : "This potion has 3 charges. I can use a charge and apply a coat of red oil to a weapon. For the next hour, the weapon is considered magical. When I hit a creature with a coated weapon, it takes an additional 2d6 necrotic damage at the start of its turn."
}

MagicItemsList["elder lightning draught"] = {
    name : "Elder Lightning Draught",
    source : [["A:TLotU", 49]],
    type : "potion",
    rarity : "very rare",
    description : "When I drink this potion, I must make a DC 16 Constitution saving throw, taking 4d8 damage on a failed save and failing to drink the potion. On a success, I only take half damage and become imbued with elder lightning for one minute. I maximize all lightning damage rolls I make. Additionally, I ignore lightning resistance and treat immunity has resistance."
}

MagicItemsList["darkblood tonic"] = {
    name : "Darkblood Tonic",
    source : [["A:TLotU", 49]],
    type : "potion",
    rarity : "very rare",
    description : "When I drink this potion, I must make a DC 16 Wisdom saving throw taking 4d8 psychic damage on a failed save and vomitting the contents. On a success, I only take half damage and become enraged for one minute. While enraged, I gain an additional attack when I take the attack action on my turn. In addition, I become enlarged as per the Enlarge/Reduce spell and gain a +2 to my Constitution score for the duration. After a minute, I am stunned for 1 round as I painstakingly return to my size."
}

MagicItemsList["potion of reality fractals"] = {
    name : "Potion of Reality Fractals",
    source : [["A:TLotU", 50]],
    type : "potion",
    rarity : "legendary",
    description : "This potion is similar to the Wish spell. These potions can only be found in the deeper down within the primeval chambers of the Gardens of Omniturgy. Immediately after drinking it, I can choose one of the following effects or other effects at the DM's discretion. Harmonize, Replicate, Greater Fabrication, or Arcanomophosis. See notes page.",
    toNotesPage : [{
        name : "Effects",
        note : desc([
            "Harmonize: I immediately attune to a magic item I can see within 30 ft. If another creature is already attuned, their attunement is broken and transferred to you. You become aware of the item's properties as if I had cast Identify on it.",
            "Replicate: I cast a perfect copy of a spell or magical effect I've seen before. For any effects created this way, the DC is 22 and my attack bonus is +14.",
            "Greater Fabrication: I cast the Fabricate spell, ignoring the need for material components. I am considered proficient with all artisan's tools for the purposes of what I can create this way.",
            "Arcanomorphosis: I permanently gain an additional spell slot of the highest level I can currently cast. A creature can only benefit from this effect once."
        ])
    }]
}

MagicItemsList["ambrotype of the void"] = {
    name : "Ambrotype of the Void",
    source : [["A:TLotU", 56]],
    type : "wondrous item",
    rarity : "legendary",
    description : "I can use my action to take a picture I can see within 60 ft, who must succeed on a DC 18 Charisma saving throw or have their likeness stored within the camera. While their picture is saved, the creature has disadvantage on all Wisdom, Intelligence, and Charisma saving throws. It can store up to 3 pictures, and after I finish a long rest, it wipes the memory",
    action : ["action", ""],
    usages : 3,
    recovery : "long rest"
}

MagicItemsList["outsider's helm"] = {
    name : "Outsider's Helm",
    source : [["A:TLotU", 56]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "I gain 120 ft of blindsight, but lose any sight-based senses. Additionally, I am immune to psychic damage and to effects that would make me roll on a madness table. Its powers also goes to protect somewhat beyond that; body and soul cannot be warped by aberrant powers, rending me immune to an Aboleth's aquatic disease, for example.",
    vision : [["Blindsight", 60], ["Lose all other sight-based senses", ""]]
}

MagicItemsList["reality splitter"] = {
    name : "Reality Splitter",
    source : [["A:TLotU", 56]],
    type : "weapon (pistol)",
    rarity : "legendary",
    attunement : true,
    description : "This pistol deals a base of 3d6 lethality damage, and I have a +3 bonus to attack and damage rolls. Additionally, it doesn't need to be reloaded, and deals an additional 3d6 lethality damage on a critical hit.",
    weaponOptions : [{
        name : "Reality Splitter",
        regExpSearch : /reality splitter/i,
        baseWeapon : "pistol",
        damage : [3, 6, "lethality"],
        modifiers : [3,3],
        description : "+3d6 lethality dmg on crit",
        selectNow : true
    }]
}

MagicItemsList["emerald tablet, volume i"] = {
    name : "Emerald Tablet, Volume I",
    source : [["A:TLotU", 64]],
    type : "wondrous item",
    rarity : "artifact",
    attunement : true,
    description : "While attuned, I must make a DC 22 Charisma saving throw each dawn or lose the attunement. It becomes weightless to me, but terribly heavy for everyone else, and my Charisma score becomes a 26. I gain one legendary resistance, damage immunity, and condition immunity, and gain resistance to elemental damage (acid, cold, fire, lightning, and thunder). I can cast Wish once per week.",
    scoresOverride : [0,0,0,0,0,26],
    dmgres : ["Acid", "Cold", "Fire", "Lightning", "Thunder"],
    limfeaname : "Legendary Resistance",
    usages : 1,
    recovery : "long rest",
    spellcastingBonus : [{
        name : "Wish",
        spells : ["wish"],
        selection : ["wish"],
        firstCol : 1
    }]
}

MagicItemsList["voidshard"] = {
    name : "Voidshard",
    source : [["A:TLotU", 69]],
    type : "wondrous item",
    rarity : "rare",
    attunement : false,
    description : "When a Void Golem dies, 1d20+10 intact Voidshards are left behind. When a shard takes bludgeon/slash damage, it bursts dealing 1d6 piercing + 1d6 psychic damage to creatures within 5 ft of it. Creatures concentrating on a spell must make a DC 18 concentration check regardless of the damage taken. This item is commonly used with a slingshot/catapult spell to create ranged concentration breaking weapons."
}

/*

        THE COLLEGE OF FOOLS BARD

*/


SourceList["MG:DoMF"] = {
    name : "Myriel Genra's: Deck of Many Fates",
    abbreviation : "MG:DoMF",
    abbreviationSpellsheet : "MG",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/05/14"
}

AddSubClass("bard", "college of fools", {
    regExpSearch : /^(?=.*(college|bard|minstrel|troubadour|jongleur))(?=.*fools).*$/i,
	subname : "College of Fools",
	source : [["MG:DoMF", 1]],
    features : {
        "subclassfeature3" : {
            name : "New Beginnings",
            source : [["MG:DoMF", 2]],
            minlevel : 3,
            description : desc([
                "I can choose an additional background. However, I do not gain items or features from it, such as languages, contacts, abilities, etc. It is just a performance or facade.",
                "I do gain its proficiencies. I can roll a Charisma (Performance) check vs a creature's Wisdom (Insight) to convince them of my role.",
                "I can change this background after I finish a long rest. If my DM does not use backgrounds, I can alternatively choose two skill proficiencies and a tool proficiency, and can change these whenever I finish a long rest."
            ]),
            usages : 1,
            recovery : "long rest"
        },
        "subclassfeature3.1" : {
            name : "Self Mockery",
            source : [["MG:DoMF", 2]],
            minlevel : 3,
            description : desc([
                "I learn the Vicious Mockery cantrip, which doesn't count against the number of cantrips I know, and I can use it on myself.",
                "When used this way, I do not take damage nor suffer from its effects. Instead, I embarrass myself and enemies within 60 ft that I can see and understand are magically convinced of my incompetence and regard me as harmless. Until the end of my next turn, hostile creatures cannot willingly target me with an attack or harmful spell, unless I am the only possible target within 60 ft. This does not protect me from area effects or spells. After using this feature, a creature is immune to this ability for 24 hours." 
            ]),
            spellcastingBonus : [{
                name : "Self Mockery",
                spells : ["vicious mockery"],
                selection : ["vicious mockery"],
                times : 1,
            }]
        },
        "subclassfeature3.2" : {
            name : "Beginner's Luck",
            source : [["MG:DoMF", 2]],
            minlevel : 3,
            description : desc([
                "Whenever I or a creature within 60 ft uses a skill with which they are not proficient, I can expend onf use of my bardic inspiration to give advantage on the roll. If they pass the skill check, I regain the expended bardic inspiration used for this feature."
            ])
        },
        "subclassfeature6" : {
            name : "Fool's Errand",
            source : [["MG:DoMF", 2]],
            minlevel : 6,
            description : desc([
                "When a creature within 60 ft of me misses an attack or fails a saving throw, I can use my reaction to expend a use of my bardic inspiration and allow the creature to repeat the roll. If the creature succeeds, I regain a use of bardic inspiration."
            ])
        },
        "subclassfeature14" : {
            name : "The One That Begins",
            source : [["MG:DoMF", 2]],
            minlevel : 14,
            description : desc([
                "I cannot be frightened or surprised, and the first ability check or saving throw I make after long rest is considered a critical success. Additionally, when I succeed a skill check or saving throw, I can choose a number of creatures equal to my Charisma modifier within 60 ft of me. For the next minute, they cannot be charmed or frightened. Any charm or fear effects currently on the creature is immediately broken."
            ]),
            savetxt : { immune : ["surprised", "frightened"] }
        }
    }
})

/*

        SCHOOL OF THE WORLD WIZARD

*/

AddSubClass("wizard", "the world", {
    regExpSearch : /the world/i,
	subname : "School of The World",
    source : [["MG:DoMF", 3]],
    features : {
        "subclassfeature2" : {
            name : "Worldly Savant",
            source : [["MG:DoMF", 4]],
            minlevel : 2,
            description : desc([
                "I can copy spells into my spellbook even if they are not wizard spells. They count as wizard spells for me."
            ]),
            calcChanges : {
                spellList : [
                    function(spList, spName, spType) {
                        // If this is not the wizard spell list or if this is a bonus spell
                        if(spName !== "wizard" || spType.indexOf("bonus") !== -1) return;
                        // Add all spells from all other classes to the wizard spell list
                        var aSpells = CreateSpellList({"class" : "all", level : [1,9]}, false, false, false);
                        spList.extraspells = spList.extraspells.concat(aSpells);
                    }
                ]
            }
        },
        "subclassfeature2" : {
            name : "Rewrite Magic",
            source : [["MG:DoMF", 4]],
            minlevel : 2,
            description : desc([
                "When I cast a spell I can choose one of the following effects, which I can use twice per long rest:",
                "\u2022 Disregard Components: I ignore the somatic components for a spell, and can ignore material components as long as their gold value is equal or less than my wizard level x 50",
                "\u2022 Alleviate Prana: I can expend a spell slot that is one level lower than the spell I choose to cast. 1st level spells cannot be downcasted in this manner",
                "\u2022 Self to Others: I cast a spell with a range of self on a single willing creature within melee range, as if the spell had the touch property",
                "\u2022 Change Area: I change the area of effect of a spell from one type to another. See options on the 3rd notes page for changing the area."
            ]),
            toNotesPage : [{
                name : "Area Equivalences",
                note : desc([
                    "Line to Sphere: Length divided by 5 becomes the radius of the sphere",
                    "Line to Cone: Length divided by 4 becomes the length of the cone",
                    "Sphere to Cone: Radius multiplied by 2 and becomes the length of the cone",
                    "Sphere to Line: Radius multiplied by 4 and becomes the length, width is 5",
                    "Cone to Sphere: Length divided by 2 and becomes the radius of the sphere",
                    "Cone to Line: Length multiplied by 3, width is 5"
                ]),
                page3notes : true
            }],
            limfeaname : "Rewrite Magic",
            usages : levels.map(function(n) {
                return (n < 2 ? 0 : n < 14 ? 2 : 4)
            }),
            recovery : "long rest"
        },
        "subclassfeature6" : { 
            name : "Journeyman of The World",
            source : [["MG:DoMF", 4]],
            minlevel : 6,
            description : desc([
                "My hit point max increases by 4, I gain one additional skill or tool proficiency and learn one additional language, and gain a +1 to my Initiative rolls. I gain these benefits again when I reach 10th and 14th level."
            ]),
            calcChanges : {
                hp : function (totalHD, HDobj, prefix) {
                    var lvl = classes.known.wizard.level
                    return [ (lvl < 6 ? 0 : lvl < 10 ? 4 : lvl < 14 ? 8 : 12), "Journeyman of The World" ]
                }
            },
            additional : levels.map(function(n) {
                return (n < 6 ? 0 : n < 10 ? 1 : n < 14 ? 2 : 3) + " languages, " + (n < 6 ? 0 : n < 10 ? 4 : n < 14 ? 8 : 12) + " hp, " + (n < 6 ? 0 : n < 10 ? 1 : n < 14 ? 2 : 3) + "skill/tools"
            }),
            addMod : [{ type : "skill", field : "Init", mod : 1, text : "I add 1 to my Initiative at 6th level." }]
        },
        "subclassfeature10" : {
            name : "Unbrindled Ambition",
            source : [["MG:DoMF", 4]],
            minlevel : 10,
            description : desc([
                "Once per long rest, I can use my action to end one effect on myself causing me to be charmed or frightened."
            ]),
            usages : 1,
            recovery : "long rest",
            addMod : [{ type : "skill", field : "Init", mod : 1, text : "I add 2 to my Initiative at 10th level." }]
        },
        "subclassfeature14" : {
            name : "Greater Wordly Magic",
            source : [["MG:DoMF", 4]],
            minlevel : 14,
            description : desc([
                "I gain 2 additional uses of Rewrite Magic and unlock the following effects:",
                "\u2022 Touch to Range: A spell with a range of touch gains a range of 60 ft when I cast it",
                "\u2022 Power Word: When I cast a spell requiring a saving throw, increase my Spell Save DC by 2 for that spell. Additionally, creatures cannot benefit from advantage against it such as Magic Resistance",
                "\u2022 Freecast: I can cast a leveled spell on a turn in which I have already casted a leveled spell"
            ]),
            addMod : [{ type : "skill", field : "Init", mod : 1, text : "I add 3 to my Initiative at 14th level." }]
        }
    }
})

/*

        WAY OF STRENGTH MONK

*/

AddSubClass("monk", "way of strength", {
    regExpSearch : /strength/i,
	subname : "Way of Strength",
    source : [["MG:DoMF", 5]],
    features : {
        "subclassfeature3" : {
            name : "Strength Technique",
            source : [["MG:DoMF", 6]],
            minlevel : 3,
            description : desc([
                "I can use my Strength mod instead of my Dexterity mod for the purposes of determining my Unarmored Defense AC. Additionally, I can use my Strength mod instead of my Dexterity mod whenever I use my Deflect Missiles feature."
            ]),
            extraAC : [{
                mod : "Str-Dex",
				text : "I can use my strength instead of Wisdom for determining Unarmed Defense AC",
                stopeval : function (v) { return v.wearingArmor || Number(What('Dex')) > Number(What('Str')); }
            }]
        },
        "subclassfeature3.1" : {
            name : "Inner Fire",
            source : [["MG:DoMF", 6]],
            description : desc([
                "When I roll Initiative, am targeted by an attack roll, or spend a ki point, I gain 1 charge of Inner Fire. I can store a number of charges equal to my monk level, and expire if I haven't gained any new charges in a minute. I can only gain theses while in combat, and can expend these charges to certain abilities found on the notes page.",
            ]),
            minlevel : 3,
            toNotesPage : [{
                name : "Inner Fire Abilities",
                note : desc([
                    "\u2022 Fiery Adrenaline (Passive): I gain a +1 to AC while I have at least 1 charge",
                    "\u2022 Soul Blade (3 charges): When I hit an unarmed strike, I can use my reaction and expend 3 charges, adding 2d4 fire damage to the attack. This increases to 2d6 at 5th, 2d8 at 11th, and 2d10 at 17th",
                    "\u2022 Strength of Body (3 charges): I reduce all incoming damage by 2 and gain advantage on Strength checks and saving throws until the end of my next turn. If I am already under the effects of this, I can replenish the duration by expending 1 charge. The damage reduction increases by 2 at 5th, 3 at 11th, and 4 at 17th.",
                    "\u2022 Healing Fire (all charges): As a bonus ction, I consume all charges and regain a number of hp equal to the number of charges expended"
                ])
            }],
            action : ["bonus action", "Healing Fire"]
        },
        "subclassfeature6" : {
            name : "Manifestation of Soul",
            source : [["MG:DoMF", 6]],
            minlevel : 6,
            description : desc([
                "As a bonus action, I enter a state of heightened power for a minute. While in this state, I gain an additional fire charge when I am targeted by an attack or spend a ki point. Additionally, my Strength increases by 2, up to a max of 22, and I shed bright light to 30 ft and dim light for an additional 30 ft."
            ]),
            usages : 1,
            recovery : "long rest",
            action : ["bonus action", ""]
        },
        "subclassfeature11" : {
            name : "Improved Inner Fire",
            source : [["MG:DoMF", 6]],
            description : desc([
                "I gain additional abilities to spend my Inner Fire charges on found on the notes page."
            ]),
            minlevel : 11,
            toNotesPage : [{
                name : "Additional Inner Fire Abilities",
                note : desc([
                    "\u2022 Unbreakable Stance (Passive): If I start my turn with at least 5 charges, I cannot be affected by critical hits",
                    "\u2022 Deflect Blow (5 charges): I expend 5 charges to use my Deflect Missile feature on a melee attack, reducing the damage by an additional 5 points. If the damage is reduced to 0, I can spend a ki point to make an unarmed strike against the attacker",
                    "\u2022 Step of Fire and Wind (5 charges): When I use my Step of Wind ability, I can expend 5 charges to gain a fly speed equal to my walking speed until the end of my next turn",
                    "\u2022 Inner Strength (5 charegs): I gain advantage on all saving throws until the end of my next turn. If this ability is already active, I can refresh the duration by spending 3 charges",
                    "\u2022 Ki Recovery (all charges): As a bonus action, I consume all charges, recovering 1 ki point per every 5 charges consumed"
                ]),
                action : ["bonus action", "Ki Recovery"],
                amendTo : "Inner Fire Abilities"
            }]
        },
        "subclassfeature17" : {
            name : "Aspect of Strength",
            source : [["MG:DoMF", 6]],
            minlevel : 17,
            description : desc([
                "I am always under the effects of my Manifestation of Soul feature."
            ])
        }
    }
})

/*

        THE ALL FATHER'S INK

*/

SourceList["A:TAFI"] = {
    name : "Ariadne's: The All Father's Ink",
    abbreviation : "A:TAFI",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    url : "https://www.patreon.com/codexofstrings/posts",
    date : "2024/03/19"
};

AddSubClass("barbarian", "path of the challenger", {
    regExpSearch : /^(?=.*path)(?=.*\bchallenger\b).*$/i,
    subname : "Path of the Challenger",
    source : [["A:TAFI", 73]],
    features : {
        "subclassfeature3" : {
            name : "Noble Rage",
            source : [["A:TAFI", 73]],
            minlevel : 3,
            description : "\n   " + "When raging, I gain a +2 to attack rolls made against enemies that are above half of their maximum hit points, and a +2 to damage rolls against enemies that are at or below half of their maximum hit points."
        },
        "subclassfeature3.1" : {
            name : "Challenger's Right",
            source : [["A:TAFI", 73]],
            minlevel : 3,
            description : "\n   " + "Whenever I hit a creature with a reckless attack or critical hit, they are now under the effects of the compelled duel spell until the end of their next turn."
        },
        "subclassfeature6" : {
            name : "Conquerer of Worthy Foes",
            source : [["A:TAFI", 73]],
            minlevel : 6,
            description : "\n   " + 'Whenever a creature is affected by the "Challenger\'s Right" feature for the first time, they take 2d6 psychic damage, and an additional 1d6 psychic damage every time I hit it with a melee attack while under its effects.'
        },
        "subclassfeature10" : {
            name : "Einherjar Bond", 
            source : [["A:TAFI", 73]],
            minlevel : 10,
            description : "\n   " + "If I am reduced to 0 hit points, a spirit appears above me. I have advantage on death saving throws, and an 18 or 19 is treated as a critical success. It disappears after I regain consciousness or stabilized. I cannot use this again until I finish a short or long rest.",
            usages : 1,
            recovery : "short rest"
        },
        "subclassfeature14" : {
            name : "Golden Challenger",
            source : [["A:TAFI", 73]],
            minlevel : 14,
            description : "\n   " + "While I am raging, my AC cannot be lower than 20, I gain resistance to radiant and necrotic damage, and have advantage on rolls to resist curses and diseases of any kind."
        }
    }
});

// The one in the deluxe edition is V1.0, this adds V2.0 from the patreon post.
AddSubClass("bard", "college of madness", { 
    regExpSearch : /^(?=.*college)(?=.*madness).*$/i,
    subname : "College of Madness",
    source : [["A:TAFI", 74]],
    features : {
        "subclassfeature3" : {
            name : "Mad Mockery",
            source : [["A:TAFI", 74]],
            minlevel : 3,
            description : desc([
                "I learn the vicious mockery cantrip which now deals 1d6 damage instead of 1d4. This increases to 2d6 at 5th level, 3d6 at 11th level, and 4d6 at 17th level.",
                "Additionally at 7th level, creatures that succeed on a saving throw against this now takes half damage and must subtract 1d4 from the next attack they make before the end of their next turn. A creature that fails this save has disadvantage on all attack rolls they make until the end of their next turn instead."
            ]),
            spellcastingBonus : [{
                name : "Mad Mockery",
                spells : ["vicious mockery"],
                selection : ["vicious mockery"],
                firstCol : "atwill",
                times : 1
            }],
            spellChanges : {
                "vicious mockery" : {
                    description : "1 creature save or 1d6 Psychic dmg; CL 7, half dmg on fail, -1d4 from next attack; disadv. vs all attacks until the end of next turn.",
                    descriptionCantripDie : "1 crea save or 1d6 psychic dmg; CL 7, 1/2 dmg on fail, -1d4 next attack; disadv. all attacks until end of next turn.",
                    descriptionFull : "You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (thought it need not understand you), it must succeed on a Wisdom saving throw or take 1d6 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn." + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6) and 17th level (4d6)." + "\n   " + "At 7th level, creatures that succeed on a saving throw against this now take half damage and must subtract 1d4 from the next attack they make before the end of their next turn. A creature that succeeds this save has disadvantage on all attack rolls they makee until the end of their next turn.",
                    changes : "Spells damage becomes 1d6 instead of 1d4. At 7th level, creatures take half damage on a failed save and must subtract 1d4 from the next attack they make. On a success, they have disadvantage on all attack rolls they make until the end of their next turn."
                }
            }
        },
        "subclassfeature3.1" : {
            name : "Notes of Loss",
            source : [["A:TAFI", 74]],
            minlevel : 3,
            description : desc([
                "When I see a hostile creature die within 30 ft of me, I can expend one use of bardic inspiration to give every ally of the deceased creature within 30 ft and aware of their death a penalty to their next attack roll, ability check, or saving throw equal to my bardic inspiration die."
            ])
        },
        "subclassfeature6" : {
            name : "Language of Madness",
            source : [["A:TAFI", 74]],
            minlevel : 6,
            description : desc([
                "I can speak gibberish and have any creature understand me via telepathy. The creature cannot understand me if it cannot understand any language",
                "Additionally, I can use this to cast the Command spell as a bonus action on my turn. I can cast this spell a number of times equal to half my Proficiency bonus rounded down per long rest."
            ]),
            languageProfs : ["Gibberish"],
            usages : "1/2 Prof. bonus per ",
            usagescalc : "event.value = Math.floor(Number(How('Proficiency Bonus'))/2);",
            recovery : "long rest", // this is not explicitly stated, but assuming,
            spellcastingBonus : [{
                name : "Command",
                spells : ["command"],
                selection : ["command"],
                firstCol : "Sp",
                times : 1
            }],
            spellChanges : {
                "command" : {
                    time : "1 bns",
                    changes : "I can cast this as a bonus action a number of times equal to half my proficiency bonus rounded down."
                }
            }
        },
        "subclassfeature14" : {
            name : "Madsong",
            source : [["A:TAFI", 74]],
            minlevel : 14,
            description : desc([
                "At 14th level, I can attempt to play a piece of the Madsong. I must make a DC 20 performance check. On a failure, I fall unconscious until I take damage or a creature uses an action to wake me up. On a success, a 30 ft radius sphere centered on me manifests. I can either give allies within range advantage on all Int, Wis, and Cha ability checks and saving throws, or give my enemies within range disadvantage on all saving throws. I can use my bonus action on subsequent turns to maintain the Madsong. I can use this feature once per long rest."
            ]),
            usages : 1,
            recovery : "long rest"
        }
    }
})

RaceList["ink-forged"] = {
    regExpSearch : /ink-forged/i,
    name : "Ink-Forged",
    source : [["A:TAFI", 9]],
    plural : "Ink-Forged",
    scores : [0, 2, 0, 0, 0, 0],
    scorestxt : "+2 Dexterity",
    size : [2,3,4],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Eyes of Ink", 60]],
    languageProfs : ["Common", "Primordial"],
    trait : "Ink-Forged (+2 Dexterity)" +
    "\n \u2022 Born of Ink: I can prepare one of the following abilities found on the notes page at the end of a short or long rest.",
    toNotesPage : [{
        name : "Ink-Forged: Born of Ink Features",
        page3notes : true,
        note : [
            "    I gain the following Born of Ink features. Once I use this ability, I must finish a short or long rest before I can use it again or prepare another." +
            "\n    " + "\u2022 Shadow Step: As a bonus action, I can teleport up to 60 ft to an unoccupied space I can see that is in dim light or darkness." + 
            "\n    " + "\u2022 Fluid Form: When I take damage, I can use my action to gain resistance to bludgeoning, piercing, and slashing damage until the start of my next turn." + 
            "\n    " + "\u2022 Ethereal Sight: I can see invisibly creatures on the Ethereal plane within 60 ft of me for the next hour."
        ]
    }],
    action : [["bonus action", "Shadow Step"], ["reaction", "Fluid Form"]],
    features : {
        "born of ink" : {
            name : "Born of Ink",
            minlevel : 1,
            usages : 1,
            recovery : "long rest"
        }
    }
};

RaceList["luminescent veil ink-forged"] = {
    regExpSearch : /^(?=.*luminescent)(?=.*veil)(?=.*ink-forged).*$/i,
    name : "Luminescent Veil Ink-Forged",
    sortname : "Ink-Forged, Luminescent Veil",
    source : [["A:TAFI", 9]],
    plural : "Ink-Forged",
    scores : [0, 2, 0, 0, 0, 1],
    scorestxt : "+2 Dexterity and +1 Charisma",
    size : [2,3,4],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Eyes of Ink", 60]],
    languageProfs : ["Common", "Primordial"],
    spellcastingAbility : 6,
    trait : "Ink-Forged (+2 Dexterity, +1 Charisma)" +
    "\n \u2022 Born of Ink: I can prepare one of the following abilities found on the notes page at the end of a short or long rest. Additionally, Blinding Flash is always prepared." +
    "\n \u2022 Revealing Light: I learn the light cantrip and can concentrate on it for 1 minute. Doing so allows me to see everything in the bright light radius as truesight.",
    toNotesPage : [{
        name : "Ink-Forged: Born of Ink Features",
        page3notes : true,
        note : [
            "    I gain the following Born of Ink features. Once I use this ability, I must finish a short or long rest before I can use it again or prepare another." +
            "\n    " + "\u2022 Shadow Step: As a bonus action, I can teleport up to 60 ft to an unoccupied space I can see that is in dim light or darkness." + 
            "\n    " + "\u2022 Fluid Form: When I take damage, I can use my action to gain resistance to bludgeoning, piercing, and slashing damage until the start of my next turn." + 
            "\n    " + "\u2022 Ethereal Sight: I can see invisibly creatures on the Ethereal plane within 60 ft of my for the next hour." +
            "\n    " + "\u2022 Blinding Flash: As a bonus action, I can shine maddening light. All creatures withint 30 ft of me must succeed a Constitution saving throw or be blinded until the end of their next turn. Charisma is my spellcasting ability for this."
        ]
    }, {
        name : "Eyes of Ink",
        page3notes : true,
        note : [
            "I can see normally in magical and normal darkness out to a range of 60 ft."
        ]

    }],
    action : [["bonus action", "Shadow Step"], ["reaction", "Fluid Form"], ["bonus action", "Blinding Flash"]],
    features : {
        "born of ink" : {
            name : "Born of Ink",
            minlevel : 1,
            usages : 1,
            recovery : "long rest"
        }
    },
    spellcastingBonus : [{
        name : "Revealing Light",
        spells : ["light"],
        selection : ["light"],
        times : 1
    }]
};

RaceList["inkbound marefjes ink-forged"] = {
    regExpSearch : /^(?=.*inkbound)(?=.*marefjes)(?=.*ink-forged).*$/i,
    name : "Inkbound Marefjes Ink-Forged",
    sortname : "Ink-Forged, Inkbound Marefjes",
    source : [["A:TAFI", 9]],
    plural : "Ink-Forged",
    scores : [0, 3, 0, 0, 0, 0],
    scorestxt : "+3 Dexterity",
    size : [2,3,4],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    vision : [["Eyes of Ink", 60]],
    languageProfs : ["Common", "Primordial"],
    trait : "Ink-Forged (+3 Dexterity)" +
    "\n \u2022 Resilience of the Mad: Adv. vs. being charmed or frightened." +
    "\n \u2022 Haunted by Nightmares: I dream vividly about Odin's pact with the King in Yellow, sometimes sharing prophetic insights with Odin and learn secrets about my current circumstance, at the DM's discretion" +
    "\n \u2022 Born of Ink: I can prepare one of the following abilities found on the notes page at the end of a short or long rest. Additionally, Shadowmeld is always prepared. ",
    toNotesPage : [{
        name : "Ink-Forged: Born of Ink Features",
        page3notes : true,
        note : [
            "    I gain the following Born of Ink features. Once I use this ability, I must finish a short or long rest before I can use it again or prepare another." +
            "\n    " + "\u2022 Shadow Step: As a bonus action, I can teleport up to 60 ft to an unoccupied space I can see that is in dim light or darkness." + 
            "\n    " + "\u2022 Fluid Form: When I take damage, I can use my action to gain resistance to bludgeoning, piercing, and slashing damage until the start of my next turn." + 
            "\n    " + "\u2022 Ethereal Sight: I can see invisibly creatures on the Ethereal plane within 60 ft of my for the next hour." +
            "\n    " + "\u2022 Shadowmeld: If I am in dim light or darkness, I can use my bonus action to meld into the shadows, becoming invisible for one minute or until I make an attack, cast a spell, or take damage."
        ]
    }, {
        name : "Eye's of Ink",
        page3notes : true,
        note : [
            "I can see normally in magical and normal darkness out to a range of 60 ft."
        ]
    }],
    adv_vs : ["charmed", "frightened"],
    action : [["bonus action", "Shadow Step"], ["reaction", "Fluid Form"], ["bonus action", "Shadowmeld"]],
    features : {
        "born of ink" : {
            name : "Born of Ink",
            minlevel : 1,
            usages : 1,
            recovery : "long rest"
        }
    }
};

MagicItemsList["seal of the king"] = {
    name : "Seal of the King", 
    source : [["A:TAFI", 12]],
    type : "wondrous item",
    rarity : "very rare",
    description : "You are immune to the Black Touch sickness and frightened condition, but you are now vulnerable to radiant damage.",
    savetxt : {
        immune : ["frightened", "black touch sickness"],
        text : "Vulnerable to radiant damage"
    }
};

MagicItemsList["visage of the punished seer"] = {
    name : "Visage of the Punished Seer", 
    source : [["A:TAFI", 15]],
    type : "wondrous item",
    rarity : "artifact",
    attunement : true,
    scores : [0, 0, 0, 0, 2, 0],
    description : "When put on, Wisdom save (DC 15) or take 5d6+5 psyhic damage and be stunned until the end of your next turn. On a success, you are attuned for 1d4 days and witness prophecies that led to the seer's death. See notes.",
    toNotesPage : [{
        name : "Visage of the Punished Seer",
        note : desc([
            "While attuned, my wisdom score increases by two. Additionally, I cannot be detected by divination magic unless I wish to be and can cast the following spells requiring only verbal components (DC 20)",
            "\u2022 At will: locate object, detect magic, see invisibility",
            "\u2022 3/day each: clairvoyance, scrying",
            "\u2022 1/day each: foresight"
        ])
    }],
    extraLimitedFeatures : [{
        name : "Clairvoyance, Scrying",
        usages : 3,
        recovery : "long rest"
    }, {
        name : "Foresight",
        usages : 1,
        recovery : "long rest"
    }],
    fixedDC : 20,
    spellcastingBonus : [{
        name : "Visage of the Punished Seer",
        spells : ["locate object", "detect magic", "see invisibility"],
        selection : ["locate object", "detect magic", "see invisibility"],
        times : 3,
        firstCol : "atwill"
    }, {
        name : "Visage of the Punished Seer",
        spells : ["clairvoyance", "scrying"],
        selection : ["clairvoyance", "scrying"],
        times : 2,
        firstCol : 3
    }, {
        name : "Visage of the Punished Seer",
        spells : ["foresight"],
        selection : ["foresight"],
        times : 1,
        firstCol : 1
    }]
};

MagicItemsList["ring of eternal struggle"] = {
    name : "Ring of Eternal Struggle", 
    source : [["A:TAFI", 15]],
    type : "ring",
    rarity : "artifact",
    attunement : true,
    description : "You can speak the command word, Ouroboros, as an action or bonus action. See notes pages for additional effects.",
    extraLimitedFeatures : [{
        name : "Ring of Eternal Struggle",
        usages : 0,
    }],
    toNotesPage : [{
        name : "Ring of Eternal Struggle",
        note : desc([
            "I can use my action or bonus action to speak the command word, Ouroboros, to activate or deactivate the ring. While active, I gain the following effects:",
            "\u2022 I take 5 necrotic damage at the start of each of my turns and whenever I miss an attack roll. This damage cannot be mitigated in any way.",
            "\u2022 For every successful attack, I deal an additional 5 necrotic damage and heal for 10 hp, or 15hp if I am missing more than half of my total hp.",
            "\u2022 This ring can hold up to 3 charges, which are lost after a minute. When I reduce a creature of CR 1 or higher to 0 hp, I gain a charge. If my current hp is reduced to 0 and there are currently one or more charges in the ring, I can expend a charge to drop to 1 hp instead.",
            "\u2022 I can also expend a charge to make a powerful but risky enchantment. My next melee attack deals additional necrotic damage equal to my missing hp, up to a max of 50. If I miss, I am instantly reduced to 0 hp instead."
        ])
    }],
};

var pandoras_box_fullDescription = [
    "This small wooden box is an artifact from another land and another time. It can be easily mistaken for a worthless reliquary, but those who touch it, are immediately taken aback by the overflowing power within. They know that this box is primordially evil.",
    "The box contains power and corruption in equal measure and can only be opened by a non-lawful creature. It takes one minute to open, as the energies of the ancient lock slowly give way to the chaos within. Once opened, all creatures within 120 ft of the box must succeed on a DC 15 Constitution or be instantly killed. If you survive and were also the one that opened the box, you are blessed by chaotic power and regain the following:",
    "\u2022 Recover all your hit points, features, and abilities.",
    "\u2022 Cleansed of any curse, disease, or poison.",
    "\n While the box is open, the following occurs:",
    "\u2022 While within 120 ft of the box, you can increase any two ability scores of your choosing to a 26 and gain 50 temporary hit points at the end of each of your turns.",
    "\u2022 The box spawns 1d6+3 Harbinger Draugen and 1d4 Harbinger Trolls every minute. After the first hour, it spawns a single Harbinger Revenant instead of the trolls.",
    "\u2022 If the box stays opened for more than 24 hours, it spawns a CR 30 Leviathan of Ink. After summoning it, it is considered empty and spawns no more creatures.\n",
    "If you are still alive and within 120 ft of the box, a ghastly voice offers three wishes. These wishes are granted with evil intent, always bringing great suffering to the world in their fulfillment. Once the box is used in this way, it cannot be opened again until a century has passed.",
    "A creature of lawful alignment can attempt to close the box. They must spend a minute in communion with it, spending their action to maintain concentration on the ritual. At the start of each of their turns, they take 20 necrotic damage. All creatures spawned by the box will attempt to interrupt the closing ritual at any cost. After the box is sealed this way, it cannot be opened for one month." 
];

MagicItemsList["pandora's box"] = {
    name : "Pandora's Box", 
    source : [["A:TAFI", 16]],
    type : "wondrous item",
    rarity : "artifact",
    prerequisite : "Requires attunement by a non-lawful creature",
    prereqeval : function(v) { return !(/lawful/i).test(What("Alignment")); },
    attunement : false,
    description : "When opened, all creatures within 120 ft of the box must succeed on a DC 15 Constitution saving throw or be instantly killed. If the creature that opened the box survives, they are blessed by chaotic power found on the notes page.",
    toNotesPage : [{ 
        name : "Pandora's Box",
        note : desc(pandoras_box_fullDescription).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/you /ig, "I ").replace(/yourself /ig, "myself ")
    }]
};

MagicItemsList["shefus' lucky spear"] = {
    name : "Shefus' Lucky Spear",
    source : [["A:TAFI", 21]],
    description : "While this spear can normally only be wielded by Shefus, I can also use this +2 spear",
    type : "weapon (spear)",
    rarity : "uncommon",
    attunement : false,
    weaponOptions : [{
        regExpSearch : /shefus' lucky spear/i,
        name : "Lucky Spear",
        baseWeapon : "spear",
        modifiers : [2, 2],
        selectNow : true
    }]
};

MagicItemsList["daring buckler"] = {
    name : "Daring Buckler", 
    source : [["A:TAFI", 21]],
    description : "Instead of the shield's normal bonus to AC, I gain a +1 to Dexterity. If I move 30ft towards a hostile creature before using my action to attack, the bonus becomes a +2 until the end of my next turn. Additionally, I can use Daring Riposte three times a day.",
    type : "shield",
    rarity : "very rare",
    attunement : true,
    usages : 3,
    recovery : "Dawn",
    shieldAdd : ["Daring Buckler", 0, 2],
    scores : [0, 1, 0, 0, 0, 0],
    shieldAdd : ["Daring Buckler -2", 0, 2],
    toNotesPage : [{
        name : "Daring Riposte",
        page3notes : true,
        note : desc([
            "As a reaction, I can add 5 to my AC against a single melee attack that targets me. If this causes the attack to miss, I can make an opportunity attack against the attacking creature as part of the same reaction."
        ])
    }],
    action : ["reaction", "Daring Riposte"]
};

MagicItemsList["dart"] = {
    name : "Dart",
    source : [["A:TAFI", 21]],
    description : "This shortsword grants a +2 to attack and damage rolls. I may also make an additional weapon attack with this sword as part of your Attack action. Rolling an 18-20 on a Large or smaller creature counts as a critical hit.",
    type : "weapon",
    rarity : "very rare",
    attunement : true,
    weaponOptions : [{
        regExpSearch : /dart/i,
        name : "Dart",
        baseWeapon : "shortsword",
        modifiers : [2, 2],
        selectNow : true
    }]
};

MagicItemsList["blackbox blaster"] = {
    name : "Blackbox Blaster",
    source : [["A:TAFI", 36]],
    description : "This blaster counts as a firearm dealing 1d10 piercing damage plus 1d10 of fire damage on a hit. It has the loading property (6 rounds) and uses Black Box ammunition.",
    type : "firearm",
    rarity : "uncommon",
    weaponOptions : [{
        regExpSearch : /blackbox blaster/i,
        name : "Blackbox Blaster",
        source : [["A:TAFI", 36]],
        list : "firearm",
        ability : 2,
        type : "Martial",
        damage : [1, 10, "piercing"],
        range : "60/120 ft",
        weight : 3, // official pistol is 3 lb and does same damage
        description : "Ammunition, loading, +1d10 fire damage",
	    abilitytodamage : true,
        ammo : "black box ammo",
        selectNow : true
    }]
};

MagicItemsList["heart grenade"] = {
    name : "Heart Grenade",
    source : [["A:TAFI", 37]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "This cursed heirloom is said to be taken from a dying saint. Her last wish was to shine beyond death, to go out in a blaze of glory. This heirloom has 5 charges, regaining 1d4+1 every dawn. Expending the last charge, roll 1d10. On a 1, the heirloom disinteregrates. The usage for these can be found on the notes page. ",
    toNotesPage : [{
        name : "Heart Grenade",
        note : desc([
            "When a creature within 120 ft of me is reduced to 0 hit points, I can expend a charge to make the heart explode. Each creature within 30 ft of the target creature must make DC 16 Constitution saving throw, taking 5d8 necrotic damage, or half on a success.",
            "I can also expend 3 charges to throw the heirloom at a target within 60 ft of me, causing the same effects mentioned above."
        ])
    }],
    fixedDC : 16,
    usages : 5,
    recovery : "dawn"
};

MagicItemsList["keepsake of ten stings"] = {
    name : "Keepsake of Ten Stings",
    source : [["A:TAFI", 37]],
    type : "wondrous item",
    rarity : "legendary",
    attunement : true, 
    description : "This is an ancient amulet from a long dead god, and carries the powers of a god of rot and poison. I become immune to poison damage and the poisoned condition. My weapon attacks become magical and deal extra damage. Additionally, I can use Sting of Ten and Poison Absorption found on the notes page.",
    toNotesPage : [{
        name : "Keepsake of Ten Stings' Features",
        note : desc([
            "Sting of Ten: Once per turn, I can add 2d12 poison damage to a weapon attack that deals slashing or piercing damage. A creature hit by this attack must succeed on a DC 20 Constitution saving throw or be poisoned for one minute. On a successful save, a creature is immune to this effect for 24 hours. Additionally, whenever I attack a poisoned creature, I can use my bonus action to make an additional attack against it.",
            "Posion Absorption: Whenever I take posion damage, I take no damage and instead regain a number of hp equal to the damage dealt. I cannot benefit from this feature if I am the source of this damage."
        ])
    }],
    fixedDC : 20,
    calcChanges : {
        atkAdd : [
            function (fields, v) {
                if( !v.isSpell && !v.isDC && v.isMeleeWeapon && (/piercing|slashing/).test(v.theWea.damage[2])) {
                    fields.Description += (fields.Description ? '; ' : '') + '+2d12 poison dmg once per turn; DC 20 Con save or poisoned';
                }
            }
        ]
    },
    action : ["bonus action", "Sting of Ten"],
    savetxt : { text : ["Heal poison dmg dealt to me (cannot be from me)"], immune : ["poison damage", "poisoned condition"] }
};

MagicItemsList["severed head of the suneater"] = {
    name : "Severed Head of the Suneater",
    source : [["A:TAFI", 38]],
    type : "wondrous item",
    rarity : "artifact",
    description : "This severed head craves arcane energies. It's mouth is always opened and whenever the head enters an area where a spell or magical effect of 4th level or lower is currently active, the effect ends, and every level above 4th takes an additional round to devour the effects. While holding this head and targeted by a spell, I may use my reaction to devour the spell of 4th level or lower.",
    action : ["reaction", "Devour"]
};

MagicItemsList["hunter's edge"] = {
    name : "Hunter's Edge",
    source : [["A:TAFI", 53]],
    type : "weapon (dagger)",
    rarity : "legendary",
    weaponOptions : [{
        regExpSearch : /hunter's edge/i,
        name : "Hunter's Edge",
        source : [["A:TAFI", 53]],
        baseWeapon : "dagger",
        modifiers : [3, 3],
        selectNow : true
    }],
    description : "This dagger has a +3 bonus to attack and damage rolls. Additionally, the dagger deals an extra 1d12 bonus damage to aberrations, fiends, and celestials. If the creature I am attacking is at least one size larger than me, on an 18-20 on the attack roll, it is considered to be a critical hit."
};

MagicItemsList["chief sentinel's garb"] = {
    name : "Chief Sentinel's Garb",
    source : [["A:TAFI", 53]],
    type : "armor (studded leather)",
    rarity : "rare",
    description : "The Chief Sentinel's Garb is a +2 studded leather armor that gives an additional +1 bonus to AC while in dim light or darkness. Additionally, I am resistant to acid damage and have advantage on stealth checks in dim light or darkness.",
    armorAdd : ["Chief Sentinel's Garb"],
    armorOptions : [{
        regExpSearch : /chief sentinel's garb/i,
        name : "Chief Sentinel's Garb",
        source : [["A:TAFI", 53]],
        type : "light",
        ac : "12+2",
        weight : 13
    }],
    extraAC : [{ 
        mod : 0,
        name : "Dim Light/Darkness (+1 to AC)",
        magic : true,
        text : "I gain a +1 bonus to AC while in dim light or darkness",
    }],
    dmgres : ["Acid"],
    savetx : { adv_vs : ["Stealth checks in dim light/darkness"] }
};

MagicItemsList["sentinel's roar"] = {
    name : "Sentinel's Roar",
    source : [["A:TAFI", 53]],
    description : "This device is not meant to deal damage, but to instead fill the area with thunderous noise. I may pull the pin and throw it to a point within 60 ft. Each creature within a 10 ft radius takes 1d4 thunder damage and must make a Constitution saving throw or be deafened, blinded, and unable to take reactions until the end of their next turn.",
    choices : ["Common", "Uncommon", "Rare"],
	choicesNotInMenu : true,
    action : ["action", ""],
    "common" : {
        name : "Sentinel's Roar [common]",
        rarity : "common",
        description : "This device is not meant to deal damage, but to instead fill the area with thunderous noise. I may pull the pin and throw it to a point within 60 ft. Each creature within a 10 ft radius takes 1d4 thunder damage and must make a Constitution saving throw (DC 12) or be deafened, blinded, and unable to take reactions until the end of their next turn.",
        fixedDC : 12
    },
    "uncommon" : {
        name : "Sentinel's Roar [uncommon]",
        rarity : "uncommon",
        description : "This device is not meant to deal damage, but to instead fill the area with thunderous noise. I may pull the pin and throw it to a point within 60 ft. Each creature within a 10 ft radius takes 1d4 thunder damage and must make a Constitution saving throw (DC 14) or be deafened, blinded, and unable to take reactions until the end of their next turn.",
        fixedDC : 14
    },
    "rare" : {
        name : "Sentinel's Roar [rare]",
        rarity : "rare",
        description : "This device is not meant to deal damage, but to instead fill the area with thunderous noise. I may pull the pin and throw it to a point within 60 ft. Each creature within a 10 ft radius takes 1d4 thunder damage and must make a Constitution saving throw (DC 16) or be deafened, blinded, and unable to take reactions until the end of their next turn.",
        fixedDC : 16
    }
};

var HandOfTheKingNotes = [
    ">>Cursed Artifact<<. While attuned to this item, you do not cast a shadow, and begin aging at 10 times my normal rate. Whenever you kill a humanoid, I become a year younger as you absorb the soul of your enemy.",
    ">>Mad Conduit<<. Non-magical objects you touch with this hand begin to rust and decay rapidly, taking 3d8 necrotic damage per turn. A creature hit by an unarmed strike or melee spell attack made with this hand takes an additional 3d6 piercing and 3d8 necrotic damage, and must make a DC 20 Wisdom saving throw or gain a random madness effect from the short-term madness table.",
    ">>Hope Devourer<<. This hand has 10 charges. As a reaction to an ability check, attack roll, or saving throw made by a creature within 60 ft of you, you can reduce the roll by an amount equal to the number of charge you expend. If the creature then fails to meet the DC, you recover 1d4+1 charges. You regain all charges after a long rest."
];

MagicItemsList["hand of the king"] = {
    name : "Hand of the King",
    source : [["A:TAFI", 56]],
    type : "wondrous item",
    rarity : "artifact",
    attunement : true,
    description : "The Hand of the King is a conduit to the Mad realms, and carries power from the thread of madness. To attune to this, I must sever my right hand at the wrist and press this item to the stump. It then grafts itself to me and becomes a functioning appendage.",
    toNotesPage : [{
        name : "Hand of the King Features",
        note : desc(HandOfTheKingNotes).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/you /ig, "I ").replace(/yourself /ig, "myself ")
    }],
    action : ["reaction", "Hope Devourer"],
    usages : 10,
    recovery : "long rest",
    calcChanges : {
        atkAdd : [
            function(fields, v) {
                if (v.baseWeaponName === "unarmed strike" || (v.thisWeapon[3] && SpellsList[v.thisWeapon[3]])) {
                    fields.Description += (fields.Description ? '; ' : '') + '+3d8 necrotic, +3d6 piercing damage';
                }
            }
        ]
    }
};

var MirrorOfThingsGreatAndTerribleNotes = [
    "This mirror gives me a +2 to your Charisma score up to a max of 24. In addition, any natural roll of 19 or 20 is considered a critical success, but a natural 1 or 2 is considered a critical failure.",
    ">>Mirror Mirror, on my hand<<. As a reaction to rolling a critical success on an ability check, saving throw, or attack roll, you  can use the mirror to store that critical within the artifact and roll again. You must take the new roll.",
    "For the next hour, you may replace any roll of the same type as the first, with the critical success roll.",
    ">>Will I ever not be Damned?<< After you use the mirror, it turns dark with gloom, and cannot store another critical success until it is purged. While in this state, it decreases my Charisma score by 4. In addition, you are unable to score critical hits on your attacks.",
    "To cleanse this mirror, you must use your reaction to turn one of your attack rolls or saving throws into a critical failure. Once you do so, the artifact is restored."
]

MagicItemsList["mirror of things great and terrible"] = {
    name : "Mirror of Things Great and Terrible",
    source : [["A:TAFI", 56]],
    type : "wondrous item",
    rarity : "artifact",
    attunement : true,
    description : "Within this small, hand-held, broken mirror, I can see my reflection, or at least who I could have been, had I taken the correct path in life. The features of this mirror can be found on the notes page.",
    toNotesPage : [{
        name : "Mirror of Things Great and Terrible Features",
        note : desc(MirrorOfThingsGreatAndTerribleNotes).replace(/>>(.*?)<</g, function(a, match) { return match.toUpperCase(); }).replace(/your/g, "my").replace(/you are /ig, "I am ").replace(/you /ig, "I ").replace(/yourself /ig, "myself ")
    }],
    action : [["action", "Mirror Mirror, on my hand"], ["reaction", "Will I ever not be Damned?"]],
    scores : [0, 0, 0, 0, 0, 2],
    scoresMaximum : [0, 0, 0, 0, 0, 24]
};

SpellsList["oath of war"] = {
    name : "Oath of War",
    source : [["A:TAFI", 30]],
    level : 1,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "Self",
    components : "V,S",
    duration : "Conc, 1 min",
    description : "+5 temp hp; your next attack roll or saving throw has adv; +1 to any ability score for duration"
};

SpellsList["radiant weapon"] = {
    name : "Radiant Weapon",
    source : [["A:TAFI", 30]],
    level : 3,
    school : "Conj",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 bns",
    range : "Self",
    components : "V,S,M",
    compMaterial : "a holy symbol worth at least 50 gp, which the spell consumes",
    duration : "Conc, 1 hr",
    description : "Create +2 weapon I am proficient with, dealing radiant dmg; uses Cha instead of Str or Dex; see full desc",
    descriptionFull : "You conjure any weapon that you are proficient with. This weapon has a +2 to attack and damage rolls and deals radiant damage instead of its usual damage type. Additionally, you can use Charisma instead of Strength or Dexterity for the attack and damage rolls."  + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the spell no longer requires concentration."
};

SpellsList["hymn of honor"] = {
    name : "Hymn of Honor",
    source : [["A:TAFI", 30]],
    level : 4,
    school : "Ench",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration : "Conc, 1 min",
    description : "my spell mod crea in 30+10/SL ft; +15 ft speed, +2 to AC, +3 to atk and dmg rolls; action to concentrate",
    descriptionFull : "You can choose number of creatures within 30 ft equal to my spell casting ability modifier. These creatures have their speed increased by 15 ft, +2 to their AC, and gain a +3 to their attack and damage rolls, but you must use your action on each of your turns to maintain concentration." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the hymn's range increases by 10ft"
};

SpellsList["divine judgement"] = {
    name : "Divine Judgement",
    source : [["A:TAFI", 31]],
    level : 8,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "a holy symbol",
    duration : "1 min",
    description : "Mark crea, glows 15 ft dim light; crea can't turn invisible; see full desc for additional benefits",
    descriptionFull : "You choose a creature within range and mark them with a divine symbol of your choice. This symbol sheds 15 ft of dim light and the creature can't turn invisible. At any point, you can use your bonus action to teleport to the an unoccupied space within 60 ft of the marked creature. This can be used to followed creatures through different planes. Once the spell ends, you return back to your plane of origin. Additionally when you teleport, you may use your action to make a ranged spell attack against the creature. On a hit, the creature takes 10d10 radiant damage and must succeed on a Constitution saving throw or be blinded until the end of their next turn. After using the teleportation and smite action three times, this spell ends"
};

SpellsList["barrier of gold"] = {
    name : "Barrier of Gold",  
    source : [["A:TAFI", 31]],
    level : 5,
    school : "Abjur",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,,M",
    compMaterial : "a golden coin",
    duration : "1 min",
    description : "15 ft rad sphere; my spell mod crea can use rea. takes -4d8+1d8/SL dmg; hostile crea -1d4 atk roll",
    descriptionFull : "You create a 15 ft radius sphere and can choose a number of creatures equal to your spell casting ability modifier. Whenever an affected creature takes damage and is inside the barrier, they can use their reaction to reduce the damage by 4d8. In addition, hostile creatures inside the barrier must subtract 1d4 from their attack rolls." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage reduction increases by 1d8 for every level above 5th"
};

/*

        THE MOLTEN CRUCIBLE

*/

SourceList["A:TMC"] = {
    name : "Ariadne's: The Molten Crucible",
    abbreviation : "A:TMC",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/05/11"
};

MagicItemsList["shard of ember pass"] = { 
    name : "Shard of Ember Pass",
    source : [["A:TMC", 3]],
    type : "treasure",
    rarity : "rare",
    description : "A shard does little on its own, but a proficient arcane smith can use this to create magical wonders. I can work with my DM with creating my own magic item using this shard."
}

RaceList["numarii"] = {
    regExpSearch : /^(?=.*numarii).*$/i,
    name : "Numarii",
    source : [["A:TMC", 10]],
    plural : "Numarii",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [0,0,0,0,2,0],
    age : " can live up to 150 years",
    height : " are generally shorter than humans",
    weight : " quite thin, 1/3 of humans",
    vision : [["Darkvision", 60]],
    trait : "Numarii (+2 Wisdom)" + desc([ 
        "Flaming Form: I know the Control Flames cantrip and immune to fire damage", 
        "As a bonus action, I light my fur and considered Ignited, dealing 1d6 fire damage to creatures around me. Everything that I carry catches fire if I am still Ignited after a full round has passed. I extinguish the flames at any point, no action required.",
    ]),
    spellcastingBonus : [{
        name : "Flaming Form",
        spells : ["control flames"],
        selection : ["control flames"],
        times : 1
    }],
    action : ["bonus action", "Flaming Form"]
}

RaceList["numarii, of might"] = {
    regExpSearch : /^(?=.*numarii)(?=.*might).*$/i,
    name : "Numarii, Of Might",
    source : [["A:TMC", 10]],
    plural : "Numarii",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [1,0,0,0,2,0],
    age : " can live up to 150 years",
    height : " are generally shorter than humans",
    weight : " quite thin, 1/3 of humans",
    vision : [["Darkvision", 60]],
    trait : "Numarii (+1 Strength, +2 Wisdom)" + desc([ 
        "Flaming Form: I know the Control Flames cantrip and immune to fire damage", 
        "As a bonus action, I light my fur and considered Ignited, dealing 1d6 fire damage to creatures around me. Everything that I carry catches fire if I am still Ignited after a full round has passed. I extinguish the flames at any point, no action required.",
        "Blessing of Might: Once per long rest, I can treat a roll below 9 or lower as a 10 on a ability check or saving throw. Additionally, when I use this ability, for the next minute, I gain a +2 to my Strength and Constitution scores."
    ]),
    limfeaname : "Blessing of Might",
    usages : 1,
    recovery : "long rest",
    spellcastingBonus : [{
        name : "Flaming Form",
        spells : ["control flames"],
        selection : ["control flames"],
        times : 1
    }],
    action : [["bonus action", ""], ["bonus action", "Flaming Form"]]
}

RaceList["numarii, of dusk"] = {
    regExpSearch : /^(?=.*numarii)(?=.*dusk).*$/i,
    name : "Numarii, Of Dusk",
    source : [["A:TMC", 10]],
    plural : "Numarii",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [0,0,0,1,2,0],
    age : " can live up to 150 years",
    height : " are generally shorter than humans",
    weight : " quite thin, 1/3 of humans",
    vision : [["Darkvision", 60]],
    trait : "Numarii (+1 Intelligence, +2 Wisdom)" + desc([ 
        "Flaming Form: I know the Control Flames cantrip and immune to fire damage", 
        "As a bonus action, I light my fur and considered Ignited, dealing 1d6 fire damage to creatures around me. Everything that I carry catches fire if I am still Ignited after a full round has passed. I extinguish the flames at any point, no action required.",
        "A Setting Sun: I gain resistance to necrotic damage. Additionally, magical darkness does not impede my vision, and I gain the Cruel Fate feat.", //I dont have access in their patreon for this feat
        "Wielder of Dusk's Artifacts: I gain an additional attunement slot and ignore the alignment requirements for attuning to magical items.",
        "Additionally, I gain proficiency with Smith's Tools and Sleight of Hand skills."
    ]),
    toolProfs : ["Smith's Tools"],
    skills : ["Sleight of Hand"],
    limfeaname : "Blessing of Might",
    usages : 1,
    recovery : "long rest",
    spellcastingBonus : [{
        name : "Flaming Form",
        spells : ["control flames"],
        selection : ["control flames"],
        times : 1
    }],
    dmgres : ["Necrotic"],
    vision : [["See through magical darkness"]],
    action : [["bonus action", "Flaming Form"]]
}

/*

        THE ICHOROUS PENINSULA

*/

SourceList["A:TIP"] = {
    name : "Ariadne's: The Ichorous Peninsula",
    abbreviation : "A:TIP",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};
SpellsList["death and despair"] = {
    name : "Death and Despair",
    source : [["A:TIP", 4]],
	level : 8,
    school : "Necro",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "90 ft",
	components : "V,S",
    duration : "Conc, 1 min",
    save : "Con",
    description : "30ft wide, 10ft tall cylinder; all crea 12d6 Necrotic dmg and demoralized; save halves and not demoralized; see desc.",
    descriptionFull : "Choose a 30 ft radius surface you can see within range. All creatures that are within 10 ft high of the surface must make a Constitution saving throw taking 12d6 Necrotic damage, or half as much on a save. A creature must make a save when it enters the spells area for the first time or ends its turn there. Nonmagical plants with and die, while magical plants receive double damage. All creatures damaged by this spell at least twice must make a Wisdom saving throw or become demoralized. A demoralized creature has its speed reduced to 0 and falls to its knees in absolute despair."
};
SpellsList["thunderous crimson"] = {
    name : "Thunderous Crimson",
    source : [["A:TIP", 2]],
	level : 1,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "S:30-ft cone",
	components : "V,S",
    duration : "Instantaneous",
    save : "Dex",
    description : "4d4+2d4/SL Lightning dmg, dazzled until end of their next turn; save no dmg, not dazzled",
    descriptionFull : "You summon a wave of crackling red lightning that travels in a 30 foot cone in front of you. Each crea in that area must succeed a Dexterity save or suffer 4d4 lightning damage and be dazzled until the end of their next turn" + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot about 1st level."
};
MagicItemsList["poncho of caustic ethrealness"] = {
    name : "Poncho of Caustic Ethrealness",
    source : [["A:TIP", 2]],
    type : "wondrous item",
    rarity : "very rare",
    attunement : true,
    description : "To attune to this item, a creature must wear this poncho for 1 minute, taking 1d6 acid damage every round. After which the poncho stops harming them, you gain resistance to acid damage and can cast etherealness once per long rest. Additionally, when hit by a melee attack by a creature within 5 ft, the attacker takes 2d6 acid damage.",
    spellcastingBonus : [{
        name : "Caustic Etherealness",
        spells : ["etherealess"],
        selection : ["etherealness"],
        times : 1,
        firstCol : "oncelr"
    }],
    dmgres : ["Acid"],
};
MagicItemsList["orb of threadseeking"] = {
    name : "Orb of Threadseeking",
    source : [["A:TIP", 4]],
    type : "artifact",
    rarity : "legendary",
    attunement : true,
    description : "Attuning to this item means that I am now the owner of a personal sub-section of the City of Strings, a timeless demiplane (see desc). As long as I have the orb in my possession, I can open a planar gate as an action which lasts until I dismiss it (no action required).",
    toNotesPage : [{
        name : "Orb of Threadseeking: Demiplane",
        note : desc([
            "The demiplane has a surface space of 8000 square feet, which you may arrange in anyway you wish. Typical rooms found in a threadseeker's demiplane include the following:",
            toUni("Arcanist's Laboratory (2000 square feet): ") + "A room to accomdate the mysteries of the cosmos. It has special instruments allowing me to cast the identify, comprehend languages, and detect posion and disease spells at will while inside the room.",
            toUni("Arcane Observatory (4000 square feet): ") + "A room to gaze at the stars of the multiverse. While inside, I can use its arcane telescope to view any place I previously visited. When doing so, the area I can see is a 20ft radius sphere and I can move it up to 15ft as an action",
            toUni("Crafting Station (4000 square feet): ") + "A room filled with arcane machinery. While in this room, I can cast the fabricate spell at will. I am also considered proficient with every type of tool for the purposes of what I can create with this room's ability.",
            "These are only examples. You can work with your DM to determing hoe the 8000 square feet is used. The more powerful the room, the more space it should occupy."
        ])
    }],
    action : ["action", "Open Demiplane Gate"]
};
RaceList["misbegotten"] = {
    regExpSearch : /misbegotten/i,
    name : "Misbegotten",
    source : [["A:TIP", 8]],
    plural : "Misbegottens",
    //stuff to make the pdf not yell at me
    trait : "You have not chosen a race yet!" +
    "\n Please pick a race and then pick 'Misbegotten' again" +
    "\n All features from the previous race will be merged to 'Misbegotten'",
    size : [],
    speed : {
        walk : { spd : 30, enc : 20 }
    },
    dmgres : ["Pick psychic/fire/acid/necrotic/cold"],
    scorestxt : "+1 to Constitution, Any bonuses from previous race",
    scores : [0,0,1,0,0,0],
    toNotesPage : [{
        name : "Misbegotten",
        note : desc([
            "Abberrant Form: You have advantage on saving throws against being charmed and frightened. Additionally, you can use a bonus action to extend and retract tentacle-like appendages from your back. These have a reach of 10ft and can be used as natural weapons, dealing 1d6 piercing damage. I am proficient with these weapons and gain advantage in atheletics and acrobatics while using them.",
            "Twilight Veil: ",
            "Whispers of Madness: ",
            "Tainted Resilience : "
        ])
    }],
    useFromPreviousRace : {
        message : "You gain the following:"+
        desc([
            "Replace one current racial feature with one from the notes page.",
            "You now have resistance to one of the following: psychic, fire, acid, necrotic, or cold.",
            "You gain advantage on saving throws against disease and posion."
        ]),
        gainTraits : ["everything"],
        updateName : ["Misbegotten", "prefix"]
    },
};

FeatsList["field medic"] = {
    name : "Field Medic",
    source : [["A:TIP", 2]],
    description : "I gain proficiency in slight of hand, or expertise if I'm already proficient. As a bonus action, I can expend a hit die to heal a creature within 5ft of me. The creature gains half my level in hit points. I can do this a number of times equal to my Proficiency bonus per short rest.",
    action : ["bonus action", ""],
    usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "short rest",
    calculate : "event.value = \"I gain proficiency in slight of hand, or expertise if I'm already proficient. As a bonus action, I can expend a hit die to heal a creature within 5ft of me. The creature gains lvl (' + Math.ceil(What('Character Level')/2) + ') in hit points. I can do this a number of times equal to my Proficiency bonus per short rest.\";"
};
FeatsList["heroic presence"] = {
    name : "Heroic Presence",
    source : [["A:TIP", 4]],
    description : "During combat, and if I am conscious and not restrained, paralyzed, or incapacitated, allies within 15 ft of me can add 1d4 to any attack or ability check they make.",
    additional : ["+1d4 to ability checks and attack rolls"]
};

/*

        THE CITADEL OF RADIANCE

*/

SourceList["A:TCoR"] = {
    name : "Ariadne's: The Citadel of Radiance",
    abbreviation : "A:TCoR",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};

CompanionList["ariadne's: the citadel of radiance companion codex"] = {
    name : "Ariadne's: The Citadel of Radiance Companion Codex",
    nameMenu : "Companion",
    source : [["A:TCoR", 0],["A:CoS", 0]]
}

MagicItemsList["ariadne's elemental capsules"] = {
    name : "Ariadne's Elemental Capsules",
    source : [["A:TCoR", 3]],
    type : "wondrous item",
    rarity : "uncommon",
    description : "Upon consuming one of these capsules, I gain resistance to its associated damage type for the next eight hours, or immunity if I am already resistant from another source. (Acid, Fire, Lightning, Cold, or Thunder)"
}

MagicItemsList["steamed oysters from the penninsula"] = {
    name : "Steamed Oysters from the Penninsula",
    source : [["A:TCoR", 3]],
    type : "food and drink",
    rarity : "common",
    description : "After eating, I gain 5 temp hp. After a minute, I take 2 acid damage. Eating more than 3 of these oysters within the next hour will cause me to be poisoned. If I consume 10 in 12 hours, I suffer 20d6 Acid damage."
}

MagicItemsList["sungrass-roasted honey garlic"] = {
    name : "Sungrass-Roasted Honey Garlic",
    source : [["A:TCoR", 3]],
    type : "food and drink",
    rarity : "common",
    description : "Sweet and savory herbal traits boost my immune system. After eating one, I gain advantage on the next Constitution saving throw I make in the next 6 hours. I can only benefit from this, once per long rest.",
}

MagicItemsList["spellbane dagger"] = {
    name : "Spellbane Dagger",
    source : [["A:TCoR", 4]],
    type : "weapon (dagger)",
    rarity : "very rare",
    description : "This dagger has a +2 bonus to attack and damge rolls. On a hit, creatures that can cast spells suffer a -1 penalty to their spell save DC and spell attacks for the next 10 minuts. This can stack up to 3 times, and every time you hit a creature with the max penalty renews the debuff timer. A remove curse or similar effect can end this early.",
    weaponOptions : [{
        name : "Spellbane Dagger",
        regExpSearch : /spellbane dagger/i,
        baseWeapon : "dagger",
        modifiers : [2,2],
        selectNow : true
    }]
}

MagicItemsList["firebolt repeater"] = {
    name : "Firebolt Repeater",
    source : [["A:TCoR", 4]],
    type : "wondrous item",
    rarity : "legendary",
    descripion : "This Large object is a rejected prototype for the official militia that found its way into the emporium's basement after being rejected. See notes page.",
    toNotesPage : [{
        name : "Firebolt Repeater Statistics",
        note : desc([
            "This repeater is Large, has an AC of 20, 160 hit points, and is immune to Poison and Psychic damage.",
            "To move the repeater without tools, all creatures attempting to move it must make a combined Strength (Athletics) check with a DC of 25 to move it 15 ft in any direction",
            "It takes one action to aim and one action to fire it. It can turn 360 degrees to aim anywhere within a 600 ft radius around itself. When fired, the gunner chooses which one of the following actions is triggered: ",
            "\u2022 Burst of Firebolts (Recharge 5-6): 2d4+2 firebolts are fired towards any number of targets within 15 ft of the point where the artifact is aimed at. Each firebolt has a +7 bonus to hit and deals 2d10 fire damage",
            "\u2022 Concentrated Fire (Recharge 5-6): A potent beam of elemental fire is launched to a point within range, dealing 10d10+20 fire damage to objects and creatures within a 15 ft radius of that point. Creatures can attempt a DC 15 Dexterity saving throw to take half damage."
        ])
    }]
}

RaceList["celesari"] = {
    name : "Celesari",
    regExpSearch : /^(?=.*celesari).*$/i,
    source : [["A:TCoR", 8]],
    plural : "Celesari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [0,0,0,2,0,0],
    age : " double that of their parent race",
    height : " considered medium creatures",
    weight : " thin and angular",
    vision : [["Darkvision", 60], ["Limited Truesight", 60]],
    trait : "Celesari (+2 Intelligence)" + desc([ 
        "I gain a +1 bonus to my AC", 
        "Limited Truesight: I have 60 ft of darkvision, but I can focus my eyes a number of seconds equal to 6 times my character level to gain truesight."
    ]),
    extraAC : [{name : "Celesari Rock Skin", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
}

RaceList["celesari, asterian"] = {
    name : "Celesari, asterian",
    regExpSearch : /^(?=.*celesari)(?=.*asterian).*$/i,
    source : [["A:TCoR", 8]],
    plural : "Celesari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [0,1,0,2,0,0],
    age : " double that of their parent race",
    height : " considered medium creatures",
    weight : " thin and angular",
    vision : [["Darkvision", 60], ["Limited Truesight", 60]],
    trait : "Celesari (+2 Intelligence, +1 Constitution)" + desc([ 
        "I gain a +1 bonus to my AC", 
        "Limited Truesight: I have 60 ft of darkvision, but I can focus my eyes a number of seconds equal to 6 times my character level to gain truesight.",
        "Gravitational Control: I know the Magic Stone cantrip. When I reach 3rd level, I can cast Feather Fall once per long rest. When I am level 5, I can cast fly once per long rest. Intelligence is my spellcasting ability for this."
    ]),
    extraAC : [{name : "Celesari Rock Skin", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
    spellcastingAbility : 4,
    features : {
        "celesari1" : {
            name : "Magic Stone",
            minlevel : 1,
            spellcastingBonus : [{
                name : "Magic Stone",
                spells : ["magic stone"],
                selection : ["magic stone"],
                firstCol : "oncelr",
                times : 1
            }]
        },
        "celesari3" : {
            name : "Feather Fall",
            minlevel : 3,
            spellcastingBonus : [{
                name : "Feather Fall",
                spells : ["feather fall"],
                selection : ["feather fall"],
                firstCol : "oncelr",
                times : 1
            }]
        },
        "celesari5" : {
            name : "Fly",
            minlevel : 5,
            spellcastingBonus : [{
                name : "Fly",
                spells : ["fly"],
                selection : ["fly"],
                firstCol : "oncelr",
                times : 1
            }]
        }
    }
}

RaceList["celesari, void-eyed"] = {
    name : "Celesari, Void-Eyed",
    regExpSearch : /^(?=.*celesari)(?=.*void-eyed).*$/i,
    source : [["A:TCoR", 8]],
    plural : "Celesari",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20},
    },
    scores : [0,0,0,2,0,0],
    skills : [
        ["Intimidation", "increment"]
    ],
    age : " double that of their parent race",
    height : " considered medium creatures",
    weight : " thin and angular",
    vision : [["Darkvision", 60], ["Limited Truesight", 60]],
    extraAC : [{name : "Celesari Rock Skin", mod : 1, magic : true, text : "I gain a +1 bonus to AC."}],
    trait : "Celesari (+2 Intelligence)" + desc([ 
        "I gain a +1 bonus to my AC", 
        "Limited Truesight: I have 60 ft of darkvision, but I can focus my eyes a number of seconds equal to 6 times my character level to gain truesight.",
        "Windows to the Dooming Dark: I gain proficiency with Intimidation, or expertise if I am already proficient.",
        "Gift of the World-Eater: Whenever I deal an instance of fire, cold, lightning, thunder, psychic, or force damage to a creature, I can make the creature roll a Strength saving throw with the a DC if 8 + my intelligence mod. + Prof. bonus. On a fail, they take twice my level in force damage and knocked prone. I can use this twice per long rest, one per each eye. After using one, one of my eyes goes dark, and I cannot see through it for an hour after."
    ]),
    limfeaname : "Gift of the World-Eater",
    usages : 2,
    recovery : "long rest",
    spellcastingAbility : 4
}

SpellsList["pulverizing radiance"] = {
    name : "Pulverizing Radiance",
    source : [["A:TCoR", 2]],
    level : 5,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration : "Instantaneous",
    description : "Make ranged spell akt; 6d6+20 Radiant dmg and target gains 3 stacks of irradiated for 1 min"
};

/*

        THE BETTER SPELLBOOK V1.0

        EVERYTHING COMMENTED OUT ARE SPELLS THAT HAVE ALREADY BEEN ADDED BY ANOTHER PDF
        
*/

//The better spellbook v1.0 addition
SourceList["A:BS"] = {
    name : "Ariadne's: Better Spellbook V1.0",
    abbreviation : "A:BS",
    abbreviationSpellsheet : "A",
    group : "Homebrew",
    date : "2024/02/14"
};

SpellsList["dark tides"] = {
    name : "Dark Tides",
	source : [["A:BS", 4]],
	level : 2,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
	range : "S:30-ft cone",
	components : "S,M",
    compMaterial : "a vial of murky water",
	duration : "Instantaneous",
    save : "Dex",
    description : "30-ft cone all crea 3d6 Cold dmg; save halves; failed creatures vulnerable to cold until end of their next turn",
    allowUpCasting : false,
};
SpellsList["nightmare's embrace"] = {
    name : "Nightmare's Embrace",
    source : [["A:BS", 4]],
	level : 3,
    school : "Ench",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "Touch",
	components : "V",
    duration : "Conc, 10 min",
    save : "Wis",
    description : "One crea save or 2d6 Psychic start of their turn and stunned; Crea remake save at end of their turn",
    allowUpCasting : false,
};
SpellsList["mass despair"] = {
    name : "Mass Despair",
    source : [["A:BS", 4]],
	level : 4,
    school : "Ench",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "60 ft",
	components : "V,S",
    duration : "Conc, 10 min",
    save : "Wis",
    description : "Up to 6 crea save or demoralized",
    descriptionFull : "You utter a sinister whisper of doom that worms its way into the minds of up to six creatures within range. Each target may hear a different sound according to what they believe is a hopeless scenario. All those affected must succeed on a Wisdom save or be demoralized. While in this state, they cannot gain advantage by any means, nor use inspiration. Additionally, as a part of this spell, as long as the demoralized condition is maintained, affected creatures have disadvantage on Intelligence, Wisdom and Charisma saves."
};
SpellsList["visions of doom"] = {
    name : "Visions of Doom",
    source : [["A:BS", 5]],
	level : 5,
    school : "Div",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "10 min",
    range : "Self",
	components : "V,S,M",
    duration : "Conc, 1 hr",
    compMaterial : "a crystal sphere",
    ritual : true,
    description : "After casting, choose Doomsight or Critical Failure; see B.",
    descriptionFull : "Once you finish casting this spell, choose one of the followng effects. Doomsight: At the DM's discretion, you witness the worst possible outcomes you could encounter by taking a specific coure of action. You can use this foretelling power a number of times equal to your spellcasting ability modifier. Critical Failure: A terrible future is revealed to you. You may replace any attack roll, saving throw or ability check made by a creature you can see with a one. This effect expires if not used during the duration of the spell."
};
SpellsList["eldritch oblation"] = {
    name : "Eldritch Oblation",
    source : [["A:BS", 5]],
	level : 8,
    school : "Div",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 hr",
    range : "Self",
	components : "V,S,M",
    duration : "Instantaneous",
    compMaterial : "one or more humanoid creatures, which the spell consumes",
    ritual : true,
    description : "Gain a Gift; can't regain a gift unless it's servitude; DM's Discretion; see B.",
    descriptionFull : "You can sacrifice a number of creatures up to your spellcasting ability modifier. Under the discretion of the DM, you may ask for a great boon from the beyond in proportion to your sacrifice; not all souls are weighted equal. These eldritch blessings can take froms of the following. Gift of Form: You can use your action to shapechange into a creature you sacrified. You use the creature's statistics and abilities, but keep your Intelligence. Your HP is whichever is greater. Gift of Servitude: You gain a feat chosen by the DM, can cast this spell at 6th level, and this boon turns you into a Harbringer Shaman (or even Harbringer Queen depending on the value of the sacrifices). Gift of Eyes: You can now cast Foresight once per day without expending a spell slot. Gift of Blood: You gain half your current max HP as temp. HP after every long rest, one fourth after every short rest. These HP do not stack after a rest, the max you can have is half of your max HP. These boons are just examples. You cannot gain the benefits of a boon twice unless it's servitude. After casting this spell, you gain an unexplainable affliction; bad luck, forgetting loved ones, or always feeling euphoric. The DM chooses your affliction"
};

// SpellsList["thunderous crimson"] = {
//     name : "Thunderous Crimson",
//     source : [["A:BS", 6]],
//     level : 1,
//     school : "Evoc",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 a",
//     range : "S:30-ft cone",
//     components : "V,S",
//     duration : "Instantaneous",
//     save : "Dex",
//     description : "4d4+2d4/SL Lightning dmg, dazzled until end of their next turn; save no dmg, not dazzled",
//     descriptionFull : "You summon a wave of crackling red lightning that travels in a 30 foot cone in front of you. Each crea in that area must succeed a Dexterity save or suffer 4d4 lightning damage and be dazzled until the end of their next turn" + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot about 1st level."
// };

SpellsList["ariadne's mimicry"] = {
    name : "Ariadne's Mimicry",
    source : [["A:BS", 6]],
	level : 4,
    school : "Trans",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "30 ft",
	components : "V,S,M",
    compMaterial : "a splinter of wood",
    duration : "8 hr (D)",
    save : "Wis",
    description : "Save or transform crea with at least 1 HP into object; Transforms back as bns or 10 damage dealt",
    descriptionFull : "A creature that you can see within range with at least 1HP makes a Wisdom saving throw or transforms into a common object, large or smaller. A shapechanger automatically succeeds on the save. This transformation lasts for the duration or until the creature takes 10 damage. The creatures statistsics are replaced with the chosen object, but it retains it alignment and personality. You can use your bonus action to transform the creature back to its original form and have it act immediately. This creature is also unable to speak, cast spells, or take any action that requires hands or speech. Their gear also melds into the chosen object, and can't activate, use, wield, or otherwise benefit from any of its equipment. While in object form, the creature can move up to half its speed by magical means."
};

// SpellsList["death and despair"] = {
//     name : "Death and Despair",
//     source : [["A:BS", 6]],
//     level : 8,
//     school : "Necro",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 a",
//     range : "90 ft",
//     components : "V,S",
//     duration : "Conc, 1 min",
//     save : "Con",
//     description : "30ft wide, 10ft tall cylinder; all crea 12d6 Necrotic dmg and demoralized; save halves and not demoralized; see B.",
//     descriptionFull : "Choose a 30 ft radius surface you can see within range. All creatures that are within 10 ft high of the surface must make a Constitution saving throw taking 12d6 Necrotic damage, or half as much on a save. A creature must make a save when it enters the spells area for the first time or ends its turn there. Nonmagical plants with and die, while magical plants receive double damage. All creatures damaged by this spell at least twice must make a Wisdom saving throw or become demoralized. A demoralized creature has its speed reduced to 0 and falls to its knees in absolute despair."
// };

SpellsList["runo's coin throw"] = {
    name : "Runo's Coin Throw",
    source : [["A:BS", 7]],
	level : 1,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "60 ft",
	components : "S,M",
    compMaterial : "a coin which the spell consumes",
    duration : "Instantaneous",
    description : "Make ranged spell atk; 3d8 Force dmg; Choose silver, gold, or platinum coin to consume; see B.",
    descriptionFull : "When you cast this spell, you can select the type of coin coin you want to consume; silver, gold, or platinum. All coins deal 3d8 force damage on a successful hit. A silver coin only deals damage. A gold coin deals the damage and the target must succeed on a Strength saving throw or be restrained until the end of their next turn. A platinum coin deals the damage and the target must make a Charisma saving throw or have a single nonmagical possession of your choice transported to an unreachable extraplanar space, reappearing after one minute has passed. This can be a suit of armor, weapons, a purse, etc."
};
SpellsList["crystal shards"] = {
    name : "Crystal Shards",
    source : [["A:BS", 7]],
	level : 1,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "90 ft",
	components : "V,S,M",
    compMaterial : "a starshard",
    duration : "Instantaneous",
    save : "Dex",
    description : "20ft rad; Each crea save or 1d6 pierce dmg and irradiated for 1d4+1 turns; see B.",
    descriptionFull : "Each creature in a 20 ft radius sphere centered on a point within range must make a Dexterity saving throw or take 1d6 piercing damage and be irradiated for 1d4+1 turns. Irradiated creatures take an additional 1d6 force damage whenever they are affected by a spell or magical effect."
};
SpellsList["fallow's theorem"] = {
    name : "Fallow's Theorem",
    source : [["A:BS", 7]],
	level : 1,
    school : "Div",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 bns",
    range : "Self",
	components : "V,S",
    duration : "Conc, 5 min",
    description : "See up to 5 min of consequences for a 1 action I take in next hr; Adv on seen saves; cannot be suprised",
    descriptionFull : "I summon a crystal shard of arcane divination, which I can utilize to peer into possible futures. I may envision the consequecnes of a single action I could take in the next hour, witnessing up to 5 minute's worth of likely consequences before the shard crumbles. If I witnessed any effects that would cause me to make a saving throw in my vision and decide to go through with the action, I gain advantage on the roll. Additionally, I cannot be surprised by creatures whose actions I witnessed inside the shard."
}
SpellsList["energy feedback"] = {
    name : "Energy Feedback",
    source : [["A:BS", 7]],
	level : 4,
    school : "Necro",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
	time : "1 a",
    range : "Touch",
	components : "V,S,M",
    compMaterial : "a charged starshard",
    duration : "Instantaneous",
    save : "Cha",
    description : "Melee spell atk, takes 4d6+1d6/SL force and save or +4d6 force dmg; see B.",
    descriptionFull : "I make a melee spell attack against a creature within my reach. On a hit, the target takes 4d6 force dmg and must make a Charisma saving or take an additional 4d6 force damage. A spellcaster that fails this saving throw loses a 3rd level spell slot, and is unable to cast spells from a school of my choice until the end of their next turn." + AtHigherLevels + "When I cast this spell using a spell slot of 5th level or higher, my attack increased by 1d6 for each slot level above 4th. In addition, spellcasters who fail the saving throw are drained of a spell slot one level below the spell slot that was used to cast this spell."
}

SpellsList["order's judgement"] = {
    name : "Order's Judgement",
    source : [["A:BS", 8]],
    level : 0,
    school : "Div",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V",
    duration : "Instantaneous",
    description : "Save or take 1d4 radiant dmg and I know one of its dmg vulnerabilities if any",
    descriptionCantripDie : "Save or take `CD`d4 radiant dmg and I know one of its dmg vulnerabilities if any"
} 

SpellsList["cause arrhythmia"] = {
    name : "Cause Arrhythmia",
    source : [["A:BS", 8]],
    level : 3,
    school : "Necro",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "a dried bloot clot",
    duration : "Conc, 1 min",
    description : "1 crea with a heart save or suffer one of the following: Bradycardia or Tachycardia; see B.",
    descriptionFull : "I cause a nearby creature's heart to beat irregularly, making them partially lose control of their bodies as their pulse falters. Creatures that don't have a heart or similar organ aren't affected by this spell. A target must succeed on a Consitution saving throw or be affected by on of the following conditions." + "\n   " + toUni("Bradycardia") + ": the creature's heart beats too slow, causing disadvantage on Strength saving throws and ability checks, and dealing 1d8 necrotic damage at the start of each of their turns." + "\n   " + toUni("Tachycardia") + ": the creature's heart beats too fast, causing disadvantage on all Dexterity based ability checks. When the effect ends for the creature, they must roll a Constitution saving throw with a DC of 5 + the number of turns they were affected for. On a failure, they suffer 8d8+10 necrotic damage as their heart fails."
}

// SpellsList["pulverizing radiance"] = {
//     name : "Pulverizing Radiance",
//     source : [["A:BS", 8]],
//     level : 5,
//     school : "Evoc",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 a",
//     range : "30 ft",
//     components : "V,S",
//     duration : "Instantaneous",
//     description : "Make ranged spell atk; 6d6+20 Radiant dmg and target gains 3 stacks of irradiated for 1 min"
// };

SpellsList["power word: penance"] = {
    name : "Power Word: Penance",
    source : [["A:BS", 8]],
    level : 7,
    school : "Ench",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "60 ft",
    components : "V",
    duration : "Instantaneous",
    description : "1 crea I can see, if crea dealt 50 \u00BD dmg within last min, they take 40 force dmg or no effect"
}

SpellsList["frostbolt"] = {
    name : "Frostbolt",
    source : [["A:BS", 9]],
    level : 1,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "120 ft",
    components : "V,S",
    duration : "Instantaneous",
    description : "Ranged spell atk 2d10+1d10/SL cold dmg and chilled for 1 min",
    descriptionFull : "You hurl a snowball imbued with energy to attack a target within range. Make a ranged spell attack against the target. On a hit, the target takes 2d10 cold damage and is chilled for a minute." + AtHigherLevels + "When I cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
}

SpellsList["ice gale"] = {
    name : "Ice Gale",
    source : [["A:BS", 9]],
    level : 2,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "60 ft",
    components : "S",
    duration : "Instantaneous",
    save : "Con",
    description : "10 ft rad point within range save or 4d6+1d6/SL cold dmg and -15ft movement til end of their next turn",
    descriptionFull : "Choose a point within range. Each creature in a 10 ft radius sphere centered on that point must make a Constitution saving throw or take 4d6 cold damage and suffer a 15 feet to their movement until the end of their next turn." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the damage inicreases by 1d6 for each slot level above 2nd."
}

SpellsList["frozen stride"] = {
    name : "Frozen Stride",
    source : [["A:BS", 9]],
    level : 3,
    school : "Trans",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "90 ft",
    components : "V,S,M",
    compMaterial : "a small shard of dry ice or cryolite",
    duration : "1 min", // It says instant but it lasts for 1 minute.
    save : "Dex",
    description : "30 ft rad no rea til end of turn while in area; \u2265 \u00BD move save or prone;  my spell mod crea \xD72 move, no effects", 
    descriptionFull : "You  summon a great frost that spreads from a point within range, covering the ground in a 30 ft radius with a thin layer of elemental ice. Any patch of water or other liquids become frozen, and anyone trying to move more than half their maximum speed must make a Dexterity saving throw or be knocked prone. Creatures on the ice cannot take reactions until the end of their next turn. Additionally, you can choose a number of creatures equal to your spellcasting ability modifier to glide across the ice, doubling their movement and ignoring all the negative effects of the spell."
}

SpellsList["glacial ward"] = {
    name : "Glacial Ward",
    source : [["A:BS", 9]],
    level : 5,
    school : "Trans",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "Touch",
    components : "S,M",
    compMaterial : "a shard of everfrost worth at least 100 GP, which the spell consumes",
    duration : "Conc, 10 min",
    description : "1 crea blud, pierce, slash, cold resist; +2+1/SL AC, -10/-5ft 7/SL \u00BD spd; 1d6+1d6/SL cold dmg melee atk",
    descriptionFull : "A buildup of sturdy ice covers a creature within range, granting them resistance to piercing, bludgeoning, slashing, and cold damage, and increasing their AC by 2, but lowering their movement speed by 10 feet. Additionally, their melee attacks deal an extra 1d6 cold damage." + AtHigherLevels + "When I cast this spell using a 7th level spell slot or higher, the movement penalty becomes 5ft, and the AC increases by 1 and the attacks deal an extra 1d6 cold damage for each slot level above 6th."
}

SpellsList["frozen brume"] = {
    name : "Frozen Brume", 
    source : [["A:BS", 10]],
    level : 6,
    school : "Trans",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 rea",
    timeFull : "1 rea which I take when I am hit by an attack",
    range : "30 ft",
    components : "V,S",
    duration : "1 rnd",
    description : "Immune to physical dmg, single target or spell atk cannot hit me; 2d6 cold dmg crea pass through me",
    descriptionCantripDie : "I turn into a cloud of icy mist until the start of my next turn. I am immune to bludgeoning, piercing, and slashing damage while transformed, and cannot be targeted by spell attacks nor single target spells. These protections work against the triggering attack. Additionally, a creature that passes through my space while I am transformed takes 2d6 cold damage and are chillden until the end of their next turn."  
}

SpellsList["stasis storm"] = {
    name : "Stasis Storm",
    source : [["A:BS", 10]],
    level : 9,
    school : "Conj",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "10 min",
    range : "Touch",
    components : "S,M",
    compMaterial : "cryolite dust worth at least 2000 GP, which the spell consumes",
    duration : "3 hr",
    description : "2000 ft rad centered where spell was cast; 50 fire dmg to center ends spell; see B.",
    descriptionFull : "I fill a 5 ft square with primordial runes of frost, stasis, and death drawn in cryolite dust. When casting is complete, a killing frost envelops everythin in a 2000 ft radius centered on the point where the spell was cast. For the duration, a magical blizzard slowly rises and intensifies. If the runes that empower the spell take 50 fire damage, the spell immediately ends." + "\n   " + toUni("Hour 1") + ": The area is covered with powdered snow and hail making the entire area lightly obscured. Nonmagical flames can't be maintained. Creatures without heavy winter clothes or magical protection are instantly chilled, and become frostbitten after 10 minutes." + "\n   " + toUni("Hour 2") + ": Nonmagical clothes no longer protect creatures, and the frostbitten condition is applied instantly instead of chilled. After 10 minutes, creatures become frozen instead. Minor structures are pierced by the storm and can no longer protect creatures from the storm." +"\n   " + toUni("Hour 3") + ": Spells of 5th level or lower are disrupted by the storm and become impossible to cast within the area of the storm. In additiona, creatures become Soul Chilled after 10 minutes. Only the sturdiest of buildings can resist these effects: castles, underground bunkers, etc." + "\n\n   " + "If the spell lasts for the full duration, every creature affected by an effect within the area is death frosted."
}

SpellsList["prana drain"] = {
    name : "Prana Drain",
    source : [["A:BS", 11]],
    level : 7,
    school : "Necro",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "Touch",
    components : "V,S",
    duration : "Instantaneous",
    save : "Cha",
    description : "Melee spell atk; On hit, 8d10 force dmg and save or mute and cannot cast spells for 1 week",
    descriptionFull : "I inhibit a creature's ability to cast spells, blocking their prana and stealing their voice. I make a melee spell attack against a creature within range. On a hit, the creature takes 8d10 force damage and must succeed on a Charisma saving throw. On a failure, they are rendered mute and cannot cast spells for 1 week. Only a 7th level upcast of Remove Curse or Greater Restoration can end this effect early."
}

SpellsList["infernal word"] = {
    name : "Infernal Word",
    source : [["A:BS", 11]],
    level : 5,
    school : "Ench",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration : "Instantaneous",
    save : "Cha",
    description : "1 crea that can hear me save or 8d6 psychic and stunned; save again at end of each turn",
    descriptionFull : "I emit a gutteral whisper, a primordial blasphemy forged in the fiery pits of hell. A creature of my choice within range that can hear me must make a Charisma saving throw or take 8d6 psychic damage and be stunned. At the end of each of the creature's turns, they can attempt the save again, ending the effect on themselves on a success."
}

SpellsList["immolate"] = {
    name : "Immolate",
    source : [["A:BS", 11]],
    level : 3,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "a handful of ash",
    duration : "Conc, 1 min",
    save : "Con",
    description : "1 crea save or 4d6 fire dmg, 1d6 fire dmg start of each turn; +1d6 as bns; water, cold dmg, 1 a to douse",
    descriptionFull : "I conjure a flame that consumes my enemies from the inside. A creature within range must succeed on a Constitution saving throw or take 4d6 fire damage. A creature that fails the save catches fire for the durtion, taking 1d6 fire damage at the start of each of turn until the flames are doused with water, cold damage, or by using an action. On subsequent turns, I can use my bonus action to increase the damage by 1d6."
}

SpellsList["vow of hatred"] = {
    name : "Vow of Hatred",
    source : [["A:BS", 11]],
    level : 0,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V",
    duration : "1 rnd",
    description : "Next turn, my first atk has adv. and +1d10 fire dmg; spell ends if target further than 30 ft; +1d10 at CL 5, 11, and 17",
    descriptionCantripDie : "Next turn, my first atk has adv. and +`CD`d10 fire dmg; spell ends if target further than 30 ft"
}

// SpellsList["astrologist's reading"] = {
//     name : "Astrologist's Reading",
//     source : [["A:BS", 12]],
//     level : 1,
//     school : "Div",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "5 rnd",
//     //time : "0.5 min", //this might cause issues as normally there aren't spells with a casting time of 'seconds'
//     timeFull : "This spell has a casting time of 30 seconds",
//     range: "10 ft",
//     components : "S",
//     duration : "Instantaneous",
//     ritual : true,
//     description : "Spellcasting ability check vs. DC (8+target crea CR/Level); Know align. and motivations",
//     descriptionFull : "Make a spellcasting ability check with the DC being 8 + the targets CR or Level. On a success, you know the target's current alignment, and may also glimpse into its current motivation. Unless they see you and are familiar with the spell, the target is not aware of your reading."
// };

// SpellsList["starfire"] = {
//     name : "Starfire",
//     source : [["A:BS", 12]],
//     level : 3,
//     school : "Evoc",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 a",
//     range : "60 ft",
//     components : "V,S,M",
//     duration : "Conc, 1 min",
//     save : "Cha",
//     compMaterial : "a purple glass shard",
//     description : "One crea expend an arcane resource worth at least a 1st level SS",
//     descriptionFull : "When a creature first fails this save and at the end of each of their subsequent turns, the target must choose what the target consumes: a spell slot of the targets choice, a charge from a magic item, or another arcane resource worth at least a 1st level spell slot; like 2 sorcery points. If target has no arcane resources, this spell has no effect."
// };

// SpellsList["cosmic singularity"] = {
//     name : "Cosmic Singularity",
//     source : [["A:BS", 12]],
//     level : 7,
//     school : "Conj",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 a",
//     range : "S:30-ft line",
//     components : "V,M",
//     compMaterial : "a small doll, a crush button worth at least 1cp",
//     duration : "1 rnd", //6 seconds is one round, avoid conflicts within the sheet
//     save : "Str",
//     description : "All crea within 10ft 6d6 Force dmg, vanish; +6d6 Force dmg start of your next turn, transported into astral sea",
//     descriptionFull : "You conjure a cannonball-sized gravitational orb. This orb travels 30 ft in a straight line, and any creatures within 10ft of the orb must make Strength save or take 6d6 Force damage and be absorbed into the orb. Creatures absorbed by the orb are transported to a demiplane where any effects from outside the demiplane cannot effect the creatures inside. A creature can communicate through the orb using magical means. A creature can teleport away or use its action to make an Strength (Athletics) check to escape. The creature appears 5 ft outside the orb on a success. Any creatures left inside the orb at the start of your next turn, they take an additional 6d6 Force damage and instantly teleported to a random location in the Astral Sea"
// };

// SpellsList["astral dust"] = {
//     name : "Astral Dust",
//     source : [["A:BS", 13]],
//     level : 0,
//     school : "Abjur",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 bns",
//     range : "Self",
//     components : "S",
//     duration : "1 rnd",
//     description : "+1 to my AC (+2 at level 5), lasts until the start of my next turn; Crea ignore if doesn't rely on sight"
// };

// SpellsList["gravity blast"] = {
//     name : "Gravity Blast",
//     source : [["A:BS", 13]],
//     level : 2,
//     school : "Evoc",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 a",
//     components : "S, M",
//     compMaterial : "a meteorite shard",
//     duration : "Instantaneous",
//     range : "60 ft",
//     save : "Str",
//     description : "Crea within 20 ft; 2d10+1d10/SL force dmg, pushed 10 ft away; save halves and aren't pushed.",
//     descriptionFull : "Choose a point within range. All creatures within 20 ft must make a Strength saving throw taking 2d10 force damage and pushed 10 ft away from the point; or half damage on a save and aren't pushed." + AtHigherLevels + "When you cast this spell with a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
// };

// SpellsList["gravity's favor"] = {
//     name : "Gravity's Favor",
//     source : [["A:BS", 13]],
//     level : 4,
//     school : "Trans",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 a",
//     components : "S, M",
//     compMaterial : "a small platinum sphere",
//     duration : "Conc, 1 min",
//     range : "Self",
//     description : "+force dmg to melee atk equal to  spell ability mod; Adv. grapple/shove; Disadv. grapple/shove me; Jump doubled; +10 ft walking spd",
//     descriptionFull : "My melee attacks deal additional force damage equal to my spellcasting ability modifier. I have advantage on grapple and shove checks against other creatures, and other creatures have disadvantage on grapple and shove checks against me. My jump distance is doubled and my walking speed increases by 10ft."
// };

// SpellsList["nebula"] = {
//     name : "Nebula",
//     source : [["A:BS", 13]],
//     level : 9,
//     school : "Mul",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 a",
//     components : "V,S",
//     duration : "Conc, 1 min",
//     range : "120 ft",
//     save : "Varies",
//     description : "30ft rad sphere; Choose one of the following from B.; Action to move it 10ft",
//     descriptionFull : "Gold: Orion's Chains. Creatures within the area must make a Wisdom saving throw or be paralyzed. At the end of each of their turns, they can attempt the save again. Red: Burning Core. Creatures within the area must make a Strength saving throw or be pulled to the center of the sphere, taking 6d10 radiant damage and 6d10 fire damage, before being spit out by a flare, landing in a place of the caster's choice 20ft away from the center of the Nebula's area. Blue: Particle Accelerator. Creatures within the area must make a Dexterity saving throw, taking 10d12 force on a failed save, or half on a success. Creatures killed this way are molecularly destroyed. Purple: Unendurable Eminence. Creatures within the area must make a DC 10 Charisma saving throw or take 150 force damage that cannot be prevented in any way. Creatures killed this way disappears without leaving behind a body. The DC increases by 2 each time a creature has to roll it between long rests. I can use an action on my turn to move the center of the sphere up to 10ft."
// };

SpellsList["twin fangs"] = {
    name : "Twin Fangs",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 14]],
    level : 2,
    school : "Necro",
    time : "1 bns",
    range : "30 ft",
    duration : "Instantaneous",
    components : "S",
    save : "Con",
    description : "Ranged spell atk, 3d6+1d6/SL poison dmg and save or poisoned for 1 min; if poisoned, no SS consumed",
    descriptionFull : "I summon twin spectral fangs from my outstretched hand, targeting a single creature within range. On a hit, the target takes 3d6 poison damage and must succeed on a Constitution saving throw or be poisoned for one minute. If the target is already poisoned when the attack hits, this spell does not consume a spell slot." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for eahc slot level above 2nd."
}

SpellsList["bad morale"] = {
    name : "Bad Morale",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 14]],
    level : 2,
    school : "Ench",
    time : "1 a",
    range : "120 ft",
    duration : "Conc, 10 min",
    components : "S,M",
    compMaterial : "a small symbol of an iron eagle with its wings down",
    save : "Cha",
    description : "Crea equal to  my spell mod save or demoralized; see B. for demoralized",
    descriptionFull : "I choose a number of creatures equal to my spellcasting ability modifier within range. Each creature must succeed on a Charisma saving throw or be demoralized. While demoralized, a target is unable to roll with advantage, use inspiration, and any similar effects. Additionally, a demoralized creature must roll a d6 at the start of each of their turns. On a 1, they don't use their action on that turn."
}

SpellsList["heartsteal"] = {
    name : "Heartsteal",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 14]],
    level : 4,
    school : "Necro",
    time : "1 a",
    range : "60 ft",
    duration : "Instantaneous",
    components : "V,S,M",
    compMaterial : "a vial of blood",
    save : "Con",
    description : "1 crea save taking 10d4 necrotic dmg; save halves; Every 4 rolled on the dmg die, heal 4 hp",
    descriptionFull : "I choose a creature within range. The target must make a Constitution saving throw, taking 10d4 necrotic damage on a failed save, or half as much damage on a successful one. For every 4 rolled on the damage dice, I regain 4 hp."
}

SpellsList["greater sleep"] = {
    name : "Greater Sleep",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 14]],
    level : 5,
    school : "Conj",
    time : "1 a",
    range : "120 ft",
    duration : "Instantaneous",
    components : "V,S",
    save : "Wis",
    description : "All crea 20ft rad save or sleep, no affect vs. charm immunity; wake if condition met, 10 dmg, or after 1 hr",
}

SpellsList["water drake"] = {
    name : "Water Drake",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 15]],
    level : 0,
    school : "Conj",
    time : "1 a",
    range : "30 ft",
    duration : "Conc, 1 min",
    components : "V,S,M",
    compMaterial : "a gallon of water",
    save : "Dex",
    description : "Conjure dragon from water used to cast this; 15 ft line save, taking 1d4 fire dmg, save halves; bns to do it again",
    descriptionCantripDie : "Conjure dragon from water used to cast this; 15 ft line save, taking `CD`d4 fire dmg, save halves; bns to do it again",
    descriptionFull : "I raise a semi-spectral aquatic dragon from the water used to cast this spell at a point within range. It immediately breathes scalding steam in a 15 ft line in a direction of my choosing. Creatures within that area must make a Dexterity saving throw, taking 1d4 fire damage or half on a save. On subsequent turns while I concentrate on this spell, I can use my bonus action to make the water drake breathe steam again."
}

SpellsList["serpentine swipe"] = {
    name : "Serpentine Swipe",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 15]],
    level : 2,
    school : "Evoc",
    time : "1 a",
    range : "S:20-ft rad",
    duration : "Instantaneous",
    components : "S",
    save : "Dex",
    description : "Creatures in a 20 ft rad around me save or 3d8+1d8/SL force dmg and knocked prone",
    descriptionFull : "I performe a quick swirl, and a spectral draconic tail follows my movement, bludgeoning and tripping those around me. Creatures within a 20 ft circle around me must succeed a Dexterity saving throw or take 3d8 force damage and be knocked prone." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
}

SpellsList["echo of leung"] = {
    name : "Echo of Leung",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 15]],
    level : 5,
    school : "Ench",
    time : "1 a",
    range : "S:40-ft rad",
    duration : "Conc, 1 min",
    components : "S",
    save : "Wis",
    description : "Crea(s) that hear me save or unable to atk me and follow mental order; must target me with dmg spells",
    descriptionFull : "All creatures that can hear me within range must make a Wisdom saving throw or be unable to attack me and purposefully target me with damaging spells for as long as I maintain concentration. Additionally, I can issue a short mental order that must be followed by creatures that failed the save on their next turn."
}

SpellsList["reflective scales"] = { 
    name : "Reflective Scales",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    source : [["A:BS", 15]],
    level : 8,
    school : "Trans",
    time : "1 a",
    range : "Touch",
    duration : "Conc, 10 min",
    components : "S",
    save : "Wis",
    description : "Crea large or smaller; +3 AC; see B. for additional benefits",
    descriptionFull : "I touch a large or smaller creature which goes diving transformation. The creature gains a +3 bonus to AC. Additionally when they are targeted by a magic missile, line spell, or ranged attack roll spell, roll a d6. On a 1-5 the creature is unaffected. On a 6, they are unaffected, and the effect is reflected back at the caster as though it originated from the target of this spell, turning the caster into a target." + AtHigherLevels + "When I cast this spell using a 9th level spell slot, the maximum duration I can contrate on this spell increases to 1 hour."
}

// SpellsList["arcane cuffs"] = {
//     name : "Arcane Cuffs",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 16]],
//     level : 2,
//     school : "Abjur",
//     time : "1 a",
//     range : "Touch",
//     duration : "1 hr",
//     components : "S,M",
//     compMaterial : "an ingot of polished silver, which the spell consumes",
//     description : "Crea save using its spell ability vs own save DC or cannot cast 2+1/SL level or lower spells; Restrained have Disadv; Incap. auto fail; Dur. 8hr 4/SL, 24hr 6/SL",
//     descriptionFull : "A creature must succeed on a saving throw usings its own spellcasting ability and save DC. On a failed save, the creature cannot cast spells of 2nd level or lower for the duration. A Restrained creature has disadvantage on the save, and an Incapacitated creature automatically fails." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the target is unable to cast spells of the slot's level or lower. Additionally, the duration increases to 8 hours at 4th level or higher and 24 hours at 6th level or higher."
// }

// SpellsList["greater identify"] = {
//     name : "Greater Identify",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 16]],
//     level : 3,
//     school : "Div",
//     time : "10 min",
//     range : "Touch",
//     duration : "Instantaneous",
//     components : "V,S,M",
//     compMaterial : "A pearl worth at least 500 gp and an owl feather",
//     description : "magic item/imbued crea/obj; learn properties, use, affecting spells, prev. 3 users and their actions; see B.",
//     descriptionFull : "I choose one magical item or magic-imbued object or creature. I learn its properties and how to use them, whether or not it requires attunement, and how many charges it has, if any. I learn the identities of its three previous users, and the most significant actions they took with it. I also learn any hidden compartments, traps, or malicious design concealed within the object. I learn if any spells are affecting the item and what they are. If the item was created by a spell, I learn which spell created it. Additionally, I decipher compatibilities and dissonances of the object with different magical auras, learning if the item would react to planar energies such as chaotic, lawful, good, and evil aura and effects. If it's a creature, I learn what spells or magical effects, if any, are currently affecting it. I also learn the three highest level spells the creature can cast, and the lasat spell it casted."
// }

// SpellsList["arcane rescripting"] = {
//     name : "Arcane Rescripting",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 16]],
//     level : 4,
//     school : "Omni",
//     time : "1 min",
//     range : "Touch",
//     duration : "Instantaneous",
//     components : "V,S,M",
//     compMaterial : "A shard of fine opal worth at least 100 gp, which the spell consumes",
//     description : "I give instructions up to 30 words to a Construct; Save if unwilling, or bound to my orders for 24hrs, 7/SL a week, 9/SL permanently"
// }

// SpellsList["magisteal"] = {
//     name : "Magisteal",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 17]],
//     level : 5,
//     school : "Omni",
//     time : "1 rea",
//     timeFull : "1 reaction when I see a creature cast a spell or magical effect",
//     range : "30 ft",
//     duration : "8 hr",
//     components : "S,M",
//     compMaterial : "the eye of a hawk",
//     description : "Replicate spell/magical effect 5+1/SL or lower as if I casted it, unless it was also created by another Magisteal",
//     descriptionFull : "I can save an arcane snapshot of a spell or magical effect of 5th level or lower that I witness within range. For the duration, I can consumee the snapshot to replicate the magic as if I were its source, maintaining all its original effects, damage, and DCs, if any. Once I do so, the spell ends. I cannot use this spell to save a snapshot of an effect being replicated by Magisteal. If the magic is a magical effect, it is up to the DM to decide what level the effect is. It's recommended to divide the CR of the creature creating the effect by 2, rounding up." + AtHigherLevels + "When I cast this spell using a spell slot of 6th level or higher, I can copy a spell or magical effect if its level is less or equal to the level of spell slot used."
// }

// SpellsList["mantle of bodily safety"] = {
//     name : "Mantle of Bodily Safety",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 17]],
//     level : 5,
//     school : "Abjur",
//     time : "1 a",
//     range : "Touch",
//     duration : "Conc, 10 min",
//     components : "V,S,M",
//     compMaterial : "a purple diamond worth at least 300 gp",
//     description : "1 Crea immune to form altering spell/effect; Crea(s) in 15ft radius adv. on saves vs. altering form spell/effect; Dur. 1hr 6+/SL",
//     descriptionFull : "A creature I touch is wreathed in an ethereal cloak of protective light, rendering them completely immune to spells or magical effects that would alter their form, such as the polymorph spell or a Medusa's petrifying gaze. Creatures within 15 feet of the Creature are also aided by its magic, gaining advantage on saving throws against spells or magical effects that would alter their form." + AtHigherLevels + "When I cast this spell using a spell slot of 6th level or higher, the maximum duration is increased to 1 hour."
// }

// SpellsList["confiscate"] = {
//     name : "Confiscate",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 17]],
//     level : 6,
//     school : "Abjur",
//     time : "1 a",
//     range : "30 ft",
//     duration : "Conc, 1 min",
//     components : "S,M",
//     compMaterial : "a platinum magnet",
//     save : "Cha",
//     description : "1 wondrous item; Crea attuned, save or interrupted until I lose conc; see B.",
//     descriptionFull : "I target a wondrous item I can see within range. If a creature is attuned to it, they must succeed a Charisma saving throw or have their attunement interrupted for as long as I maintain concentration on the spell. If I concentrate for the full minute, their attunement is broken and I can choose to instantly attune to it in their stead. Sentient items or Artifacts are unaffected, unless I cast this spell using a 9th level spell slot. Additionally, while I concentrate on this spell, I can use my bonus action to magically pull the targeted item 30 feet towards me, catching it if I have a free hand to do so when it reaches me. If a creature is carrying it, it must make a Strength (Athletics) check against my spell save DC to prefvent the item from being torn from their possession."
// }

// SpellsList["mass modify memory"] = {
//     name : "Mass Modify Memory",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 18]],
//     level : 9,
//     school : "Ench",
//     time : "8 hr",
//     range : "S:25-mi rad",
//     duration : "Instantaneous",
//     components : "V,S,M",
//     compMaterial : "an opalescent gem worth at least 10,000 gp",
//     save : "Int",
//     description : "Crea(s) Int>19 save or forget event; Gem stores forgotten memories (AC 25, 100hp, immune all but force); Contradict info allow Crea(s) save; Crea(s) disadv. on Int, Wis, Cha rolls vs my spells; See B",
//     descriptionFull : "I can muddle the memories of every creature within a 25 mile radius centered on me, changing their recollection of an event they learned about or witnessed within the past month. I can choose to eliminate all memory of the event, change the details, or create a memory of another event to replace it. A modified memory doesn't affect how a creature behaves, particularly if the memory contradicts the creature's natural inclinations, alignment, or beliefs. An illogical memory might be dismissed as a bad dream. Creatures with a 20 or higher Intelligence score can save to resist these effects, and are aware of the attempt. All stolen memories are transferred to the gem which darkens with the weight of the contained information. Creatures affected by this spell have disadvantage on Intelligence, Wisdom, and Charisma rolls to discern my intentions or resist my spells. If the creature encounters new information that contradicts the modified memory, it can attempt to save to recover them. On a failure, the creature discards it as a mistake or a lie. The gem is a magical object with 100 hp, an AC of 25, and immunity too all damage except force. If the gem is destroyed, all creatures affected by the spell recover their memory and become aware of my manipulation",
// }

// SpellsList["kara's neural needle"] = {
//     name : "Kara's Neural Needle",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 19]],
//     level : 9,
//     school : "Evoc",
//     time : "1 a",
//     range : "60 ft",
//     duration : "Instantaneous",
//     components : "S",
//     description : "Choose 1 from B. effect crea for 1 week; 12d10 psychic, save halves and no effects; No effect crea psychic immunity",
//     save : "Int",
//     descriptionFull : "I target the mind of a creature within range with a sharp pulse of psychci energy, attempting to destroy its mind. The creature must make an Intelligence saving throw and suffer deep neural damage. On a failure, they take 12d10 psychic damage. On a success, they take half damage and are not affects by the spell's other effects. I can choose one of the following to afflictions to affect the creature for the next week. Creatures with psychic immunity are unaffected by this spell." + "\n    " + toUni("Paraplegia") + ":  Basic motor skills become incredibly difficult. The target's walking speed is reduced to 5 feet, and have disadvantage on Dexterity checks, weapon, and unarmed attacks." + "\n    " + toUni("Time Agnosia") + ": The target's ability to track time start to break down. The target cannot sleep unless induced by medicine or magic, and they are unable to make plans that require projecting actions into the future." + "\n    " + toUni("Retrograde Amnesia") + ": A deep loss of memories affects the target's mind, making them forget their acquaintances, friends, and family. They still instinctively protect their allies, and a natural mistrust of enemies, but can be easily manipulated away from these institutions." + "\n    " + toUni("Anterograde Amnesia") + ": The target can remember its past, but has difficulty in learning new things. They are unable to recall any information learned after the casting of this spell." + "\n    " + toUni("Apathetic Depression") + ": The target loses the capability for feeling emotion, making them deeply unempathetic and cold. They have disadvantage on all Charisma checks and become deeply miserable." + "\n    " + toUni("Sensory Loss") + ": The target's senses are extremely dulled. They lose all special senses (such as darkvision or blindsense), have disadvantage on Perception checks, and cannot see, hear, or smell anything beyond 30 feet." + "\n    " + "A Greater Restoration reduces the duration of the effects by 1d4 days."
// }

// SpellsList["omission"] = {
//     name : "Omission",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 20]],
//     level : 2,
//     school : "Omni",
//     time : "1 a",
//     range : "30 ft",
//     duration : "1 hr",
//     save : "Wis",
//     components : "V,S",
//     description : "Choose subject (person, place, or idea), not too broad/ingrained (breathing/running); 1 Crea save or cannot produce thoughts about subject",
//     descriptionFull : "I target a creature within range with a disruptive psychic arcana, carried over by my words. When I cast this spell, I choose a subject to be omitted by the thought process of the creature. This subject can be a person, place, or an idea, as long as it isn't too broad or too ingrained as a basic part of the target's psyche, such as breathing or running. The creature must succeed on a Wisdom saving throw or be unable to autonomously produce any thoughs involving the chosen omission. If an event, such as hearing the name of the barred creature, brings the omission to the forefront of the affected creature's mind, the spell ends."
// }

// SpellsList["mindblast"] = {
//     name : "Mindblast",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 20]],
//     level : 2,
//     school : "Evoc",
//     time : "1 a",
//     range : "30 ft",
//     duration : "1 hr",
//     save : "Int",
//     components : "V,S",
//     description : "Crea Int>3 save or 2d10+1d10/SL psychic dmg; Incapacitated til end of next turn; Stunned if failed by 5 or more",
//     descriptionFull : "I launch a powerful burst of disruptive psychic waves at a creature within range. The target must succeed on an Intelligence saving throw or take 2d10 psychic damage and be Incapacitated until the end of their next turn. If they fail by 5 or more, they are Stunned instead. The spell has no effect on creatures with an Intelligence score lower than 3." + AtHigherLevels + "When I cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
// }

// SpellsList["blindspot"] = {
//     name : "Blindspot",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 20]],
//     level : 3,
//     school : "Ench",
//     time : "1 a",
//     range : "60 ft",
//     duration : "Conc, 1 hr",
//     save : "Wis",
//     components : "V,S,M",
//     compMaterial : "a small vial of black oil",
//     description : "Spell ability mod. Crea(s), save or be blind to 1+1/SL crea/obj < 10ft cube; Crea(s) can touch/smell/hear, all but sight",
//     descriptionFull : "I target a number of creatures up to my spellcasting ability modifier with a visual enchantment, creating a blindspot in their vision for a particular thing. Each creature must succeed a Wisdom saving throw or become blind to a single object or creature of my choice that is no larger than a 10-ft cube. This can be a door, an enemy, a lever, etc. A creature is unaware of this manipulation and its vision fills the missing space with a suitably inconspicuous background. A creature affected by this spell can interact with the blindspot normally in every way except sight; it can touch, smell, and hear it even through it appears to be invisible to the creature for the duration." + AtHigherLevels + "When I cast this spell using a spell slot of 4th level or higher, I can create on additional blindspot for each slot level above 3rd, up to a max of 5."
// }

// SpellsList["fate denial"] = {
//     name : "Fate Denial",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 21]],
//     level : 4,
//     school : "Omni",
//     time : "1 rea",
//     timeFull : "1 reaction, which I take when I fail a saving throw",
//     range : "Self",
//     duration : "Instantaneous",
//     components : "V,S,M",
//     compMaterial : "a fractal-shaped crystal",
//     description : "Roll save again and  my spellcasting ability modifier to the roll; Must use the new roll",
// }

// SpellsList["greater darkness"] = {
//     name : "Greater Darkness",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 21]],
//     level : 5,
//     school : "Evoc",
//     time : "1 a",
//     range : "60 ft",
//     duration : "Conc, 1 min",
//     components : "V,S,M",
//     compMaterial : "an obsidian shard",
//     description : "60-ft rad fills with darkness;  my spellcasting ability modifier Crea(s) sees through; Light 6/SL< dispelled"
// }

// SpellsList["distort timeline"] = {
//     name : "Distort Timeline",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 21]],
//     level : 7,
//     school : "Omni",
//     time : "1 a",
//     range : "120 ft",
//     duration : "1 rnd",
//     components : "V,S,M",
//     compMaterial : "an antique stopwatch worth at least 1000 gp",
//     save : "Cha",
//     description : "Create save point; Use reac. retun to save; recovers all lost resources; Cha save to resist",
//     descriptionFull : "I create a magical snapshot of all that happens within 120 feet of my from the moment I cast this spell until the end of my next turn, creating a save point. During that time period, I can make all objects and willing creatures return to the state of the save point as a reaction, changing to their original position and recovering any lost resources, such as hp and spell slots. An unwilling creature can attempt to resist the reset with a successful Charisma saving throw. All creatures are aware of this change. I can choose not to return to the save point and let time continue by not using my reaction, but the spell slot is still consumed. The spell only affects things within range. If a creature or object is further than 120 feet away from me when I return to the save point, it does not change positions or state, regardless of its circumstances when I started to record the save point."
// }

// SpellsList["fumes of insanity"] = {
//     name : "Fumes of Insanity", 
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     source : [["A:BS", 21]],
//     level : 8,
//     school : "Omni",
//     time : "1 a",
//     range : "60 ft",
//     duration : "Conc, 1 min",
//     components : "V,S,M",
//     compMaterial : "a purple glass shard",
//     description : "20-ft rad; Crea enter or start turn make Wis, Con, and Cha saves; See B. for fail effects",
//     descriptionFull : "I create a 20-foot radius sphere of swirling, neon-colored fumes centered on a point within range. Creatures that enters the area for the first time or start their turn must make a Wisdom, Constitution, and Charisma saving throw." + "\n    " + toUni("Wisdom fail") + ": the creature is hypnotized by the swirling colors, becoming incapacitated and having their speed reduced to 0. This effect ends for an affected creature if it takes more than 15 points of damage from a single source." + "\n    " + toUni("Constitution fail") + ": the toxicity of the fumes deal 3d8 poison damage to the creature and applies the poisoned condition until they leave the cloud or succeed this saving throw on a subsequent turn." + "\n    " + toUni("Charisma fail") + ": the fumes break something inside the creature's mind, who must roll on the short-term madness table to determine the effect they suffer for the next 1d10 minutes."
// }

// SpellsList["oath of war"] = {
//     name : "Oath of War",
//     source : [["A:BS", 22]],
//     level : 1,
//     school : "Evoc",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 a",
//     range : "Self",
//     components : "V,S",
//     duration : "Conc, 1 min",
//     description : "+5 temp hp; your next attack roll or saving throw has adv; +1 to any ability score for duration"
// };

// SpellsList["radiant weapon"] = {
//     name : "Radiant Weapon",
//     source : [["A:BS", 22]],
//     level : 3,
//     school : "Conj",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 bns",
//     range : "Self",
//     components : "V,S,M",
//     compMaterial : "a holy symbol worth at least 50 gp, which the spell consumes",
//     duration : "Conc, 1 hr",
//     description : "Create +2 weapon I am proficient with, dealing radiant dmg; uses Cha instead of Str or Dex; see B.",
//     descriptionFull : "You conjure any weapon that you are proficient with. This weapon has a +2 to attack and damage rolls and deals radiant damage instead of its usual damage type. Additionally, you can use Charisma instead of Strength or Dexterity for the attack and damage rolls."  + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the spell no longer requires concentration."
// };

// SpellsList["hymn of honor"] = {
//     name : "Hymn of Honor",
//     source : [["A:BS", 22]],
//     level : 4,
//     school : "Ench",
//     classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
//     time : "1 a",
//     range : "30 ft",
//     components : "V,S",
//     duration : "Conc, 1 min",
//     description : "my spell mod crea in 30+10/SL ft; +15 ft speed, +2 to AC, +3 to atk and dmg rolls; action to concentrate",
//     descriptionFull : "You can choose number of creatures within 30 ft equal to my spell casting ability modifier. These creatures have their speed increased by 15 ft, +2 to their AC, and gain a +3 to their attack and damage rolls, but you must use your action on each of your turns to maintain concentration." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the hymn's range increases by 10ft"
// };

SpellsList["divine judgement"] = {
    name : "Divine Judgement",
    source : [["A:BS", 23]],
    level : 8,
    school : "Evoc",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "a holy symbol",
    duration : "1 min",
    description : "Mark crea, glows 15 ft dim light; crea can't turn invisible; see full desc for additional benefits",
    descriptionFull : "You choose a creature within range and mark them with a divine symbol of your choice. This symbol sheds 15 ft of dim light and the creature can't turn invisible. At any point, you can use your bonus action to teleport to the an unoccupied space within 60 ft of the marked creature. This can be used to followed creatures through different planes. Once the spell ends, you return back to your plane of origin. Additionally when you teleport, you may use your action to make a ranged spell attack against the creature. On a hit, the creature takes 10d10 radiant damage and must succeed on a Constitution saving throw or be blinded until the end of their next turn. After using the teleportation and smite action three times, this spell ends"
};

SpellsList["barrier of gold"] = {
    name : "Barrier of Gold",
    source : [["A:BS", 23]],
    level : 5,
    school : "Abjur",
    classes : ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    time : "1 a",
    range : "30 ft",
    components : "V,,M",
    compMaterial : "a golden coin",
    duration : "1 min",
    description : "15 ft rad sphere; my spell mod crea can use rea. takes -4d8+1d8/SL dmg; hostile crea -1d4 atk roll",
    descriptionFull : "You create a 15 ft radius sphere and can choose a number of creatures equal to your spell casting ability modifier. Whenever an affected creature takes damage and is inside the barrier, they can use their reaction to reduce the damage by 4d8. In addition, hostile creatures inside the barrier must subtract 1d4 from their attack rolls." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage reduction increases by 1d8 for every level above 5th"
};