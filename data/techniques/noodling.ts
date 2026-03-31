import { Technique } from '../types';

export const noodling: Technique = {
  slug: 'noodling',
  name: 'Noodling (Hand Fishing)',
  description:
    'Noodling is the extreme sport of catching catfish by hand. You reach into underwater holes and cavities, let a nesting catfish bite down on your hand or arm, then wrestle it to the surface. It is legal in roughly half of U.S. states and is one of the most adrenaline-charged ways to catch a fish. Safety is paramount — never noodle alone.',
  difficulty: 5,
  bestFor: ['flathead-catfish', 'blue-catfish', 'channel-catfish'],
  waterTypes: ['river'],
  seasons: ['summer'],
  steps: [
    {
      step: 1,
      title: 'Check Legality in Your State',
      description:
        'Noodling is only legal in certain states. As of now, roughly 20 states allow hand fishing for catfish, including Oklahoma, Mississippi, Louisiana, and Texas. Check your state wildlife agency regulations before attempting this technique. Fines for noodling in prohibited states can be significant.',
    },
    {
      step: 2,
      title: 'Find Underwater Holes and Cavities',
      description:
        'Flathead and blue catfish nest in underwater structure during spawning season. Look for holes in clay banks, submerged logs with cavities, rock ledges, and rip-rap gaps. The best holes are in 2 to 10 feet of water with a single entrance large enough for a catfish but small enough to manage.',
    },
    {
      step: 3,
      title: 'Wade or Dive to the Hole',
      description:
        'Approach the hole carefully by wading or free-diving. Move slowly to avoid stirring up silt that reduces visibility. Wear old shoes with good grip to protect your feet on rocky or debris-covered bottoms. Never approach a hole you cannot safely exit.',
    },
    {
      step: 4,
      title: 'Block Escape Routes',
      description:
        'Have your spotter or buddy block any secondary exits from the hole with their feet or body. If the catfish has a back door, it will use it the moment you reach in. Proper blocking is the difference between catching a giant and watching it swim away.',
    },
    {
      step: 5,
      title: 'Reach into the Hole Slowly',
      description:
        'Extend your hand and arm into the hole slowly and deliberately. Feel for the rough sandpaper-like texture of the catfish or the fanning movement of its tail. WARNING: Be alert for snapping turtles, beavers, snakes, or other animals that may inhabit underwater cavities. If you feel a smooth shell or anything that is not a catfish, withdraw immediately.',
    },
    {
      step: 6,
      title: 'Let the Fish Bite Your Hand',
      description:
        'When the catfish strikes, it will clamp down on your hand or forearm with its sandpaper-like tooth pads. This does not usually break skin but can scrape and bruise. Do not pull your hand out when the fish bites — this is the moment you have been waiting for. Stay calm and let the fish commit.',
    },
    {
      step: 7,
      title: 'Grip the Lower Jaw Firmly',
      description:
        'Once the catfish has your hand in its mouth, curl your fingers under the lower jaw and grip firmly. The lower jaw gives you the best leverage and control. Use your other hand to support the fish from below or grip behind the gill plate. Do not grab the gill rakers as they can cut you.',
    },
    {
      step: 8,
      title: 'Surface Carefully with the Fish',
      description:
        'Pull the catfish out of the hole and bring it to the surface using both arms. Large flatheads can weigh 40 to 80 pounds and will thrash violently. Your spotter should be ready to assist. Keep the fish controlled, get to shallow water quickly, and use a stringer or large net if available.',
    },
  ],
  requiredGear: [
    {
      item: 'Thick Protective Gloves',
      description:
        'Heavy-duty gloves protect your hands from catfish tooth pads, sharp rocks, and underwater debris. Some noodlers prefer to go bare-handed for better feel, but gloves significantly reduce abrasion injuries.',
      tags: ['gloves', 'safety', 'noodling', 'catfish', 'protection'],
    },
    {
      item: 'Old Shoes with Good Traction',
      description:
        'Sturdy water shoes or old sneakers protect your feet from rocks, broken glass, and sharp objects on the bottom. Good traction is essential for maintaining footing in current while wrestling a large catfish.',
      tags: ['shoes', 'footwear', 'safety', 'noodling', 'traction'],
    },
    {
      item: 'Spotter / Buddy (REQUIRED)',
      description:
        'A spotter is not optional. Your buddy blocks escape routes, assists with large fish, monitors your safety underwater, and can call for help in an emergency. Never noodle alone under any circumstances.',
      tags: ['safety', 'buddy-system', 'noodling', 'catfish', 'required'],
    },
    {
      item: 'First Aid Kit',
      description:
        'Carry a waterproof first aid kit with bandages, antiseptic, and wound closure strips. Scrapes, cuts, and abrasions are common in noodling. Treat any wound promptly to prevent infection from river bacteria.',
      tags: ['first-aid', 'safety', 'noodling', 'medical'],
    },
  ],
  commonMistakes: [
    'Going alone — noodling without a spotter is extremely dangerous and the number one cause of noodling-related drowning incidents.',
    'Reaching into unknown holes without checking for snapping turtles, beavers, snakes, or other dangerous animals that use the same underwater cavities as catfish.',
    'Not checking legality before noodling — hand fishing is illegal in roughly half of U.S. states, and violations carry stiff fines.',
    'Panicking when the catfish bites down — pulling away sharply can cause deep scrapes from the tooth pads and lets the fish escape. Stay calm and grip the jaw.',
    'Noodling in water that is too deep or in strong current where you cannot maintain footing and risk being pulled under.',
  ],
  proTips: [
    'Target the catfish spawning season (late May through July in most states) when flatheads are guarding nests in holes and will aggressively bite anything that enters their cavity.',
    'Wear long sleeves to protect your arms from abrasion. An old long-sleeve shirt you do not mind destroying is perfect noodling gear.',
    'Start with smaller holes in shallow water to build confidence before progressing to deeper, larger cavities that may hold trophy fish.',
    'Communicate constantly with your spotter about what you are feeling in the hole. They cannot see what is happening underwater and need verbal updates to assist effectively.',
    'Carry a stringer or large mesh bag to secure fish once caught, especially if you plan to continue noodling and cannot hold the fish.',
  ],
  faq: [
    {
      question: 'Is noodling dangerous?',
      answer:
        'Noodling carries real risks including drowning, cuts and abrasions, encounters with snapping turtles or snakes, and injuries from struggling with large fish underwater. However, with a reliable spotter, proper preparation, and good judgment about which holes to explore, the risks can be managed. Never noodle alone.',
    },
    {
      question: 'What states allow noodling?',
      answer:
        'As of recent years, states that allow some form of hand fishing include Alabama, Arkansas, Georgia, Illinois, Indiana, Kansas, Kentucky, Louisiana, Maryland, Mississippi, Missouri, North Carolina, Oklahoma, South Carolina, Tennessee, Texas, Virginia, West Virginia, and Wisconsin. Laws change, so always verify with your state wildlife agency before going.',
    },
    {
      question: 'What kind of catfish do you catch noodling?',
      answer:
        'Flathead catfish are the primary target because they nest in cavities and aggressively defend them. Blue catfish and channel catfish can also be caught by hand, but flatheads are the most common and produce the largest fish in noodling encounters.',
    },
    {
      question: 'Does it hurt when the catfish bites?',
      answer:
        'Catfish do not have sharp teeth — they have rough sandpaper-like tooth pads. The initial bite feels like strong pressure and rough sandpaper on your skin. It can cause abrasion and bruising but rarely breaks the skin deeply. Most noodlers describe it as startling rather than painful.',
    },
    {
      question: 'What is the best time of year for noodling?',
      answer:
        'Summer is the only practical noodling season because catfish are on their spawning beds from late May through July. During this period, fish are holed up in cavities guarding eggs and will aggressively attack anything that enters their nesting area.',
    },
  ],
  imagePath: '/images/techniques/noodling.jpg',
  imageAlt: 'Angler hand fishing for catfish in a river, reaching into an underwater hole with a spotter nearby',
};
