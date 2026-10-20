// Result manifest for the video galleries. Converted from the v2 candidate page
// (candidates/results.js plus the featured examples from candidates/v2/script.js).
// Each `folder` is a directory under public/assets/{reconstruction,transfer,editing}/.

export const FEATURED_RECONSTRUCTIONS = {
  horse: {
    folder: "example_01",
    suffix: "_horsejump_high",
    label: "Horse jump",
    captionPrompt:
      "A woman rides her horse across an arena, passing an obstacle course with various jumps and barriers.",
    mvipPrompt:
      "A chestnut horse and rider clear a red-and-white striped obstacle during a sunlit show-jumping competition in a sandy arena.",
  },
  roundabout: {
    folder: "example_02",
    suffix: "_car_roundabout",
    label: "Roundabout",
    captionPrompt:
      "A red car drives past a gray Mini Cooper before it turns at an intersection.",
    mvipPrompt:
      "A gray Mini Countryman with a black roof and rims drives through a sunny city roundabout, passing stone buildings and a roadside monument.",
  },
  night: {
    folder: "example_03",
    suffix: "_0011_walking_dogs",
    label: "Night walk",
    captionPrompt:
      "A woman is walking on the sidewalk with two dogs at night under orange streetlights.",
    mvipPrompt:
      "A woman in a white tank top and black shorts walks two medium-sized dogs along the edge of a paved road at night, calmly moving forward under streetlights.",
  },
  bottle: {
    folder: "example_04",
    suffix: "_0059_opening_bottle",
    label: "Bottle",
    captionPrompt:
      "A man sits on a couch and looks at his phone while holding a bottle.",
    mvipPrompt:
      "A man in a pink T-shirt sits on a dark couch in a dim room and handles a beer bottle, with a curtained window and brick wall behind him.",
  },
  shadow: {
    folder: "example_05",
    suffix: "_car_shadow",
    label: "Car shadow",
    captionPrompt:
      "A silver car drives through an intersection and stops at a traffic light.",
    mvipPrompt:
      "A silver compact car crosses a bright city intersection and stops at a red light, casting a crisp shadow beside white buildings.",
  },
  interview: {
    folder: "example_06",
    suffix: "_video4120_seg000",
    label: "Interview",
    captionPrompt:
      "A person in a striped shirt is seated for a sports interview.",
    mvipPrompt:
      "A man in a black-and-gray striped shirt speaks to the camera from an orange chair against a plain yellow wall, changing expression as he talks.",
  },
  kitchen: {
    folder: "example_07",
    suffix: "_0009_seg_000",
    label: "Kitchen",
    captionPrompt:
      "A woman wearing an apron is cutting red bell peppers on a wooden chopping board.",
    mvipPrompt:
      "A person in a home-cooking apron uses a large knife to slice a red bell pepper into small pieces on a wooden cutting board beside a yellow bowl.",
  },
  rabbit: {
    folder: "example_08",
    suffix: "_0020_hSgGBHbJrmE_0_17",
    label: "Rabbit",
    captionPrompt: "A rabbit is playing with a pink stuffed toy on the floor.",
    mvipPrompt:
      "A small rabbit slowly sniffs and nuzzles a pink stuffed animal on a wooden floor, moving around it with calm, deliberate curiosity.",
  },
};

export const FEATURED_EDITS = {
  sleep: {
    folder: "example_01",
    label: "Fall asleep",
    instruction: "Make the man and the boy suddenly fall asleep.",
  },
  yacht: {
    folder: "example_07",
    label: "Wave",
    instruction: "Make the woman on the yacht wave her hand.",
  },
  still: {
    folder: "example_05",
    label: "Keep still",
    instruction: "Make the boys remain completely still.",
  },
  soldier: {
    folder: "example_06",
    label: "Turn around",
    instruction: "Make the soldier turn around on the ship.",
  },
  bird: {
    folder: "example_04",
    label: "Hop",
    instruction: "Make the bird hop around instead of walking and foraging.",
  },
  kiss: {
    folder: "example_02",
    label: "Kiss",
    instruction:
      "Make the woman and the person outside the bars kiss each other.",
  },
  swing: {
    folder: "example_03",
    label: "Stop swing",
    instruction: "Let the swing stop.",
  },
};

export const MVIP_EXTRA_RECONSTRUCTIONS = {
  kite: {
    label: "Kite surf",
    dataset: "DAVIS-2017",
    folder: "example_09",
    captionPrompt:
      "A man is kite surfing on the ocean. He grips two handles attached to an unseen kite, which pulls him across the water at speed.",
    mvipPrompt:
      "A person wearing a black helmet and life jacket kiteboards across turquoise water on a blue surfboard, holding a blue handle and moving to the right on a clear day.",
  },
  scooter: {
    label: "City scooter",
    dataset: "DAVIS-2017",
    folder: "example_10",
    captionPrompt:
      "A man rides a motorbike toward the left side of the image while pedestrians walk behind him and a car passes.",
    mvipPrompt:
      "A man wearing a white helmet and a suit rides a black scooter past parked motorcycles and cars on a tree-lined city street.",
  },
  breakdance: {
    label: "Breakdance",
    dataset: "DAVIS-2017",
    folder: "example_11",
    captionPrompt:
      "A man stands up from the ground and performs breakdance moves on his hands with one leg extended behind him.",
    mvipPrompt:
      "A young man in a red hoodie and jeans breakdances on the ground in front of a crowd, moving fluidly through a handstand with his legs in the air.",
  },
  motocross: {
    label: "Motocross jump",
    dataset: "DAVIS-2017",
    folder: "example_12",
    captionPrompt: "A rider drives a motorbike on the track.",
    mvipPrompt:
      "A motocross rider in a colorful racing suit and helmet jumps a green dirt bike on a dirt track, leaning forward and sideways against a forested background.",
  },
  dogsjump: {
    label: "Dogs & trainer",
    dataset: "DAVIS-2017",
    folder: "example_13",
    captionPrompt:
      "A woman throws a ball to two dogs on a grass field; one dog runs toward it while the other stands still.",
    mvipPrompt:
      "A woman in a yellow shirt and brown pants stands on grass with two black-and-white dogs while holding a frisbee under a cloudy gray sky.",
  },
  goldfish: {
    label: "Goldfish",
    dataset: "DAVIS-2017",
    folder: "example_14",
    captionPrompt:
      "Several goldfish of different sizes and colors swim around an aquarium decorated with rocks and plants.",
    mvipPrompt:
      "A group of vibrant orange-and-white goldfish swim in clear aquarium water around a large rock formation covered with green plants.",
  },
  motorbike: {
    label: "Motorbike trick",
    dataset: "DAVIS-2017",
    folder: "example_15",
    captionPrompt:
      "A motorcyclist leans to the side while smoke billows from both tires, and the camera pans right as another person enters the frame.",
    mvipPrompt:
      "A rider in a white helmet and T-shirt performs a burnout on a green motorcycle with gold rims, spinning the rear tire into a large cloud of smoke.",
  },
  loading: {
    label: "Electronics store",
    dataset: "DAVIS-2017",
    folder: "example_16",
    captionPrompt:
      "A person puts a box on top of another box with his right hand.",
    mvipPrompt:
      "Two men shop for televisions in a brightly lit electronics store, standing beside stacked Samsung Smart TV boxes while one examines a box closely.",
  },
  judo: {
    label: "Judo throw",
    dataset: "DAVIS-2017",
    folder: "example_17",
    captionPrompt:
      "One man throws another to the ground while a third person stands up from the floor.",
    mvipPrompt:
      "Two men in white gis practice in a gym as the athlete wearing a blue belt performs a judo throw on the athlete wearing a black belt.",
  },
  hurling: {
    label: "Hurling match",
    dataset: "Kinetics-400",
    folder: "example_18",
    captionPrompt:
      "Players pass and pursue the ball during a field match, using sticks as they run toward the goal.",
    mvipPrompt:
      "Players in red and white jerseys compete in a broadcast hurling match on a green field, running and passing the ball with their hurleys.",
  },
  windsurf: {
    label: "Windsurf",
    dataset: "Kinetics-400",
    folder: "example_19",
    captionPrompt:
      "A windsurfer leans back and holds the sail with both hands while navigating small waves along the water's edge.",
    mvipPrompt:
      "A windsurfer in a blue shirt and black shorts glides steadily across choppy water on a yellow board beneath a white sail with red and yellow accents.",
  },
  brickwall: {
    label: "Brick wall",
    dataset: "Kinetics-400",
    folder: "example_20",
    captionPrompt:
      "A man lifts a tile from the floor, places it against a wall, and adjusts its position with both hands.",
    mvipPrompt:
      "A man in a white T-shirt and blue shorts uses a trowel to apply mortar to a brick accent wall in a room under renovation.",
  },
  baton: {
    label: "Baton twirl",
    dataset: "Kinetics-400",
    folder: "example_21",
    captionPrompt:
      "A woman in jeans and a black top twirls a red, white, and black baton while walking along a sidewalk near trees.",
    mvipPrompt:
      "A woman in a black top and blue jeans performs outdoors by throwing a long red-and-black striped club into the air as it spins fluidly.",
  },
  golf: {
    label: "Golf swing",
    dataset: "Kinetics-400",
    folder: "example_22",
    captionPrompt:
      "A man on a golf course swings his club, hits the ball, and watches it fly across the field.",
    mvipPrompt:
      "A golfer in a black jacket and pants takes a full swing at a ball on a green course surrounded by trees and hills under a cloudy sky.",
  },
  lions: {
    label: "Lions",
    dataset: "Kinetics-400",
    folder: "example_23",
    captionPrompt:
      "A man holds two lions on his shoulders while a third lion approaches from the right and sniffs around them.",
    mvipPrompt:
      "A man calmly interacts with two lions in a grassy wildlife sanctuary, carrying one on his shoulders while another stands nearby.",
  },
  weightlifting: {
    label: "Weightlifting",
    dataset: "Kinetics-400",
    folder: "example_24",
    captionPrompt:
      "A man repeatedly lifts a barbell from shoulder height to overhead while squatting and standing.",
    mvipPrompt:
      "A weightlifter in a white tank top and black shorts performs a clean and jerk with a barbell loaded with yellow and green plates in a gym.",
  },
};

export const MVIP_CORE_RECONSTRUCTIONS = {
  cartoonbird: {
    label: "Bird & dog",
    dataset: "ModelScope",
    folder: "example_25",
    captionPrompt:
      "A cartoon bird with blue and white feathers is perched on the edge of an open red mailbox, looking up at something off-screen.",
    mvipPrompt:
      "Two animated characters, a blue-and-white bird and a black dog, engage in a conversation beside a red-and-blue structure.",
  },
  manuscript: {
    label: "Old manuscript",
    dataset: "ModelScope",
    folder: "example_26",
    captionPrompt:
      "Sequential close-up frames show what seems like an old document or ledger with handwritten text and decorative elements.",
    mvipPrompt:
      "A close-up view tracks across an old historical document or manuscript covered with dense handwritten text.",
  },
  microscopy: {
    label: "Microscopy",
    dataset: "ModelScope",
    folder: "example_27",
    captionPrompt:
      "Frames from a computer-generated sequence depict a cellular structure or molecular arrangement under magnification.",
    mvipPrompt:
      "A microscopic biological sample of tissue or cells glows in a repeating pattern under fluorescent dyes.",
  },
  mistcreature: {
    label: "Mist creature",
    dataset: "Pika",
    folder: "example_28",
    captionPrompt:
      "An alien-like creature stands on a reddish, rocky barren landscape resembling the surface of another planet.",
    mvipPrompt:
      "A large many-limbed humanoid figure emerges slowly through thick fog over a desolate, jagged landscape.",
  },
  sunsetwalk: {
    label: "Sunset walk",
    dataset: "Pika",
    folder: "example_29",
    captionPrompt:
      "A man and woman walk hand-in-hand on a beach at sunset, with palm trees silhouetted against an orange sky.",
    mvipPrompt:
      "A man and woman walk hand in hand along a sandy path at sunset, framed by palm trees and warm orange light.",
  },
  gamewarriors: {
    label: "Game warriors",
    dataset: "Pika",
    folder: "example_30",
    captionPrompt:
      "Three characters stand on an outdoor platform while the setting sun casts long shadows and dramatic light.",
    mvipPrompt:
      "Three armored characters face one another in a colorful fantasy video-game setting as sunlight reflects from the ground.",
  },
  energybattle: {
    label: "Energy battle",
    dataset: "Pika",
    folder: "example_31",
    captionPrompt:
      "Two animated characters engage in an intense battle against a yellow-and-orange dramatic sky.",
    mvipPrompt:
      "Two animated fighters confront one another as a bright blue energy field swirls between them in a dramatic action scene.",
  },
  kittycarrots: {
    label: "Kitty & carrots",
    dataset: "VideoCrafter2",
    folder: "example_32",
    captionPrompt:
      "An animated scene features Hello Kitty, the popular cartoon character.",
    mvipPrompt:
      "A white Hello Kitty figurine with a pink bow sits on a white surface surrounded by three orange carrots with green tops.",
  },
  librarystudy: {
    label: "Library study",
    dataset: "VideoCrafter2",
    folder: "example_33",
    captionPrompt:
      "A person sits at a desk, deeply engrossed in reading and taking notes from an open book.",
    mvipPrompt:
      "A young woman with glasses studies at a wooden desk in a library, writing beside an open book with shelves behind her.",
  },
  wheatfield: {
    label: "Wheat field",
    dataset: "VideoCrafter2",
    folder: "example_34",
    captionPrompt:
      "An expansive wheat field lies beneath a vast blue sky dotted with white and dark storm clouds.",
    mvipPrompt:
      "A centered dirt track divides a golden wheat field beneath a dramatic sky filled with towering clouds.",
  },
  waitingsoldier: {
    label: "Waiting soldier",
    dataset: "Wan2.2 · 121f",
    folder: "example_35",
    captionPrompt:
      "A person in military-style clothing sits on the edge of a bed or couch.",
    mvipPrompt:
      "A man in military clothing sits alone in a dimly lit, rustic room, waiting quietly with his hands together.",
  },
  balloonwalk: {
    label: "Girl & balloons",
    dataset: "Wan2.2 · 121f",
    folder: "example_36",
    captionPrompt:
      "A young girl in a white dress carries three purple balloons from right to left against a vibrant blue gradient.",
    mvipPrompt:
      "A small girl in a white dress walks through a serene blue gradient scene while clusters of pink balloons float above her.",
  },
  volcano: {
    label: "Volcanic eruption",
    dataset: "Wan2.2 · 121f",
    folder: "example_37",
    captionPrompt:
      "An intense volcanic eruption at night fills the dark scene with bright orange and yellow flames.",
    mvipPrompt:
      "A powerful volcanic eruption sends a bright circular burst of fire, lava, and glowing debris into the dark sky.",
  },
  scifiworkers: {
    label: "Sci-fi workstation",
    dataset: "Wan2.2 · 121f",
    folder: "example_38",
    captionPrompt:
      "Two individuals work at computers in a control room with multiple screens displaying technical data.",
    mvipPrompt:
      "Two humanoid figures in a dim scientific control room operate a workstation filled with blue technical displays.",
  },
  cavalry: {
    label: "Cavalry charge",
    dataset: "Wan2.2 · 121f",
    folder: "example_39",
    captionPrompt:
      "Several people ride horses across an open field beneath a partly cloudy daytime sky.",
    mvipPrompt:
      "A large cavalry formation gallops across a dry open field, with riders carrying bows and standards beneath a cloudy sky.",
  },
  cityfigure: {
    label: "Futuristic city",
    dataset: "Wan2.2 · 81f",
    folder: "example_40",
    captionPrompt:
      "A young animated figure walks down the middle of a city street toward a bright light at the end of the road.",
    mvipPrompt:
      "A small stylized figure in a dark dress walks through a vibrant futuristic city street as cars pass on both sides.",
  },
  readingcrocodile: {
    label: "Reading crocodile",
    dataset: "Wan2.2 · 81f",
    folder: "example_41",
    captionPrompt:
      "An animated alligator sits on a bed or couch, holding and reading from an open book.",
    mvipPrompt:
      "A cheerful green cartoon crocodile sits on a bed, engrossed in an open book as its pages move.",
  },
  aliencomputer: {
    label: "Alien computer",
    dataset: "Wan2.2 · 81f",
    folder: "example_42",
    captionPrompt:
      "An alien-like character sits at a desk and works on a computer with multiple data-filled monitors.",
    mvipPrompt:
      "A gray alien operates a computer console inside a dim futuristic control room filled with glowing displays.",
  },
  walkingletter: {
    label: "Walking letter A",
    dataset: "Wan2.2 · 81f",
    folder: "example_43",
    captionPrompt:
      "An animated child resembling a familiar cartoon character stands beside a large letter A.",
    mvipPrompt:
      "A child-sized 3D character walks around a towering stylized letter A on a brick-lined urban street.",
  },
};

export const MVIP_EXTRA_EDITS = {
  moth: {
    label: "Flap wings",
    folder: "example_08",
    instruction: "Animate the Zygaena filipendulae to flap its wings.",
  },
  chase: {
    label: "Start chasing",
    folder: "example_09",
    instruction: "Make the man and woman start chasing each other.",
  },
  pushups: {
    label: "Do push-ups",
    folder: "example_10",
    instruction: "Make the man in the black shirt start doing push-ups.",
  },
  headshake: {
    label: "Shake head",
    folder: "example_11",
    instruction: "Make the man start to shake his head.",
  },
  soccerrun: {
    label: "Run with ball",
    folder: "example_12",
    instruction:
      "Make the person holding the soccer ball run instead of walking.",
  },
  surfturn: {
    label: "Quick turn",
    folder: "example_13",
    instruction: "Make the woman on the surfboard perform a quick turn.",
  },
  drone: {
    label: "Drone takeoff",
    folder: "example_14",
    instruction: "Show the drone taking off vertically from the landing pad.",
  },
  stagefall: {
    label: "Fall together",
    folder: "example_15",
    instruction:
      "Make the male dancer and female aerial performer fall down simultaneously.",
  },
  horseride: {
    label: "Begin the ride",
    folder: "example_16",
    instruction:
      "Make the man, woman, and horse start moving forward together as if beginning the ride.",
  },
  explode: {
    label: "Bus & plane explode",
    folder: "example_17",
    instruction: "Make the bus and the airplane suddenly explode.",
  },
  clifffall: {
    label: "Fall from cliff",
    folder: "example_18",
    instruction: "Make the person on the cliff fall down.",
  },
  suitdance: {
    label: "Dance",
    folder: "example_19",
    instruction: "Make the man in the suit start dancing.",
  },
  pigeons: {
    label: "Pigeons fly",
    folder: "example_20",
    instruction: "Make the pigeons fly.",
  },
  knight: {
    label: "Knight attack",
    folder: "example_21",
    instruction:
      "Make the knight lunge forward and the creature swipe at the knight.",
  },
  ballroom: {
    label: "Move around",
    folder: "example_22",
    instruction:
      "Make the three individuals move around the ballroom while still conversing.",
  },
};

export const MVIP_TRANSFER_RESULTS = {
  nightskate: {
    label: "Night street · motion",
    folder: "example_01",
    captionPrompt:
      "A person rides a skateboard on the road, stops riding, and another person walks past.",
    mvipPrompt:
      "A dark street at night is illuminated by streetlights as the camera moves forward and a solitary person in dark clothing runs quickly along the empty road.",
  },
  nightstreet: {
    label: "Night street · crouch",
    folder: "example_02",
    captionPrompt: "A person walks toward the wall.",
    mvipPrompt:
      "A person in dark clothing sits in a crouched position on the ground of a dimly lit, empty street at night beneath a distant streetlamp.",
  },
  animatedhorse: {
    label: "Animated horse",
    folder: "example_03",
    captionPrompt:
      "An animated rider in dark clothing crosses snowy terrain on horseback while holding a sword aloft.",
    mvipPrompt:
      "A lone animated figure rides a powerful horse that rears and gallops across a snowy landscape, holding a sword aloft with distant warriors in the background.",
  },
  warrior: {
    label: "Animated warrior",
    folder: "example_04",
    captionPrompt:
      "A close-up follows an animated character in traditional attire with a red collar as the camera pans upward against a cloudy sky.",
    mvipPrompt:
      "A serious animated character in traditional Chinese attire, a red scarf, and a dark robe stands outdoors beneath a cloudy sky in classic 2D animation.",
  },
  dolphin: {
    label: "Pink dolphin",
    folder: "example_05",
    captionPrompt:
      "The dorsal fin and body of a pinkish-gray dolphin move through calm blue-green water near the surface.",
    mvipPrompt:
      "A pinkish dolphin swims partially submerged through calm, muted blue-green water, its curved dorsal fin visible above gentle surface ripples.",
  },
  flyingcreature: {
    label: "Flying creature",
    folder: "example_06",
    captionPrompt:
      "A fantastical creature with elongated limbs and a tail floats against a clear blue sky near sunset.",
    mvipPrompt:
      "A silhouetted kangaroo-dragon-like creature with a long tail and outstretched wings flies across a clear blue sky above green hills.",
  },
};
