const randomNumber = [
    "acid", "acorn", "acre", "acts", "afar", "affix", "aged", "agent", "agile", "aging", "agony", 
    "ahead", "aide", "aids", "aim", "ajar", "alarm", "alias", "alibi", "alien", "alike", "alive", 
    "aloe", "aloft", "aloha", "alone", "amend", "amino", "ample", "amuse", "angel", "anger", "angle", 
    "ankle", "apple", "april", "apron", "aqua", "area", "arena", "argue", "arise", "armed", "armor", 
    "army", "aroma", "array", "arson", "art", "ashen", "ashes", "atlas", "atom", "attic", "audio", 
    "avert", "avoid", "awake", "award", "awoke", "axis", "bacon", "badge", "bagel", "baggy", "baked", 
    "baker", "balmy", "banjo", "barge", "barn", "bash", "basil", "bask", "batch", "bath", "baton", 
    "bats", "blade", "blank", "blast", "blaze", "bleak", "blend", "bless", "blimp", "blink", "bloat", 
    "blob", "blog", "blot", "blunt", "blurt", "blush", "boast", "boat", "body", "boil", "bok", "bolt", 
    "boned", "boney", "bonus", "bony", "book", "booth", "boots", "boss", "botch", "both", "boxer", 
    "breed", "bribe", "brick", "bride", "brim", "bring", "brink", "brisk", "broad", "broil", "broke", 
    "brook", "broom", "brush", "buck", "bud", "buggy", "bulge", "bulk", "bully", "bunch", "bunny", 
    "bunt", "bush", "bust", "busy", "buzz", "cable", "cache", "cadet", "cage", "cake", "calm", "cameo", 
    "canal", "candy", "cane", "canon", "cape", "card", "cargo", "carol", "carry", "carve", "case", 
    "cash", "cause", "cedar", "chain", "chair", "chant", "chaos", "charm", "chase", "cheek", "cheer", 
    "chef", "chess", "chest", "chew", "chief", "chili", "chill", "chip", "chomp", "chop", "chow", 
    "chuck", "chump", "chunk", "churn", "chute", "cider", "cinch", "city", "civic", "civil", "clad", 
    "claim", "clamp", "clap", "clash", "clasp", "class", "claw", "clay", "clean", "clear", "cleat", 
    "cleft", "clerk", "click", "cling", "clink", "clip", "cloak", "clock", "clone", "cloth", "cloud", 
    "clump", "coach", "coast", "coat", "cod", "coil", "coke", "cola", "cold", "colt", "coma", "come", 
    "comic", "comma", "cone", "cope", "copy", "coral", "cork", "cost", "cot", "couch", "cough", "cover", 
    "cozy", "craft", "cramp", "crane", "crank", "crate", "crave", "crawl", "crazy", "creme", "crepe", 
    "crept", "crib", "cried", "crisp", "crook", "crop", "cross", "crowd", "crown", "crumb", "crush", 
    "crust", "cub", "cult", "cupid", "cure", "curl", "curry", "curse", "curve", "curvy", "cushy", 
    "cut", "cycle", "dab", "dad", "daily", "dairy", "daisy", "dance", "dandy", "darn", "dart", "dash", 
    "data", "date", "dawn", "deaf", "deal", "dean", "debit", "debt", "debug", "decaf", "decal", "decay", 
    "deck", "decor", "decoy", "deed", "delay", "denim", "dense", "dent", "depth", "derby", "desk", 
    "dial", "diary", "dice", "dig", "dill", "dime", "dimly", "diner", "dingy", "disco", "dish", "disk", 
    "ditch", "ditzy", "dizzy", "dock", "dodge", "doing", "doll", "dome", "donor", "donut", "dose", "dot", 
    "dove", "down", "dowry", "doze", "drab", "drama", "drank", "draw", "dress", "dried", "drift", "drill", 
    "drive", "drone", "droop", "drove", "drown", "drum", "dry", "duck", "duct", "dude", "dug", "duke", 
    "duo", "dusk", "dust", "duty", "dwarf", "dwell", "eagle", "early", "earth", "easel", "east", "eaten", 
    "eats", "ebay", "ebony", "ebook", "echo", "edge", "eel", "eject", "elbow", "elder", "elf", "elk", 
    "elm", "elope", "elude", "elves", "email", "emit", "empty", "emu", "enter", "entry", "envoy", 
    "equal", "erase", "error", "erupt", "essay", "etch", "evade", "even", "evict", "evil", "evoke", 
    "exact", "exit", "fable", "faced", "fact", "fade", "fall", "false", "fancy", "fang", "fax"
];

let randomLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let rand = Math.floor(Math.random() * randomNumber.length);
let rand2 = Math.floor(Math.random() * randomNumber.length);
let letter1 = Math.floor(Math.random() * randomLetters.length);
let letter2 = Math.floor(Math.random() * randomLetters.length);
let letter3 = Math.floor(Math.random() * randomLetters.length);

let randLet = randomLetters[letter1] + randomLetters[letter2] + randomLetters[letter3];
let randUser = randomNumber[rand] + randomNumber[rand2] + randLet;

console.log(randUser);
