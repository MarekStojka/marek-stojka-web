# Výraznější portréty Marka Stojky — V2

Režim: vestavěný ImageGen, editace, transparent_background: true. Čtyři samostatné editace se shodnými referencemi: src/assets/portraits/marek-kreativec-v1.png (kompoziční předloha), src/assets/portraits/original/marek-stojka-original.jpeg (kontrola identity). Výstupy: src/assets/portraits/marek-{desim,humor,kreativec,experimentuji}-v2.png. Sada V1 i originál jsou zachované.

## Společné zadání

Use case: identity-preserve expression edit. Image 1 is the EDIT TARGET and pixel-alignment master: the retouched real portrait of Marek Stojka in a plain black T-shirt. Image 2 is his original photograph, provided only to protect his real likeness. Produce ONE transparent PNG portrait, EXACT same 1024x1536 canvas, same crop, same body silhouette, shoulders, head position and size, hair, ears, nose, jaw, neck, arms, hands, wrist tattoo, T-shirt and fabric folds, black-and-white studio light and genuine transparent alpha as Image 1. Edit the FACE EXPRESSION only. Keep all pixels outside the facial muscles as unchanged as possible. The previous version had almost imperceptible changes; the user explicitly wants MUCH STRONGER, immediately readable expressions now, while still clearly being the SAME REAL MAN. Do not substitute a new face or beautify/slim/age him. Maintain natural skin pores, realistic anatomy and recognizable facial structure even under strong expression. No head tilt, no body movement, no props, no makeup, no clothing changes, no opaque background, no halo, no text or watermark. Expression to create: 

## Varianty

[
  {
    "key": "desim",
    "expression": "UMÍM DĚSIT — an unmistakably menacing intense psychological-horror stare. Strongly furrowed lowered brows and narrowed focused eyes staring directly at the camera; tight closed lips and visible jaw tension, mouth corners slightly down. Confident controlled intimidating expression, not screaming. The contrast against the friendly variants must be obvious at thumbnail size. Keep the same real identity; no wounds, scars, makeup or monsters."
  },
  {
    "key": "humor",
    "expression": "MÁM RÁD HUMOR — genuine big spontaneous OPEN-MOUTH LAUGHTER. A broad natural smile with upper teeth visible, cheeks clearly raised, eyes narrowed into joyful smile creases, mouth open as if a joke just landed. A real believable laughing expression, clearly more expressive than a slight smile. No head tipping back, keep head position and shoulders identical to the master."
  },
  {
    "key": "kreativec",
    "expression": "JSEM KREATIVE C — an unmistakable playful THINKING face. Only the eyes look up and slightly toward his left as if searching for an idea; one brow raised, the other slightly knitted, lips deliberately pursed and pushed subtly to one side. Clearly readable curiosity and concentrated imagination, like a candid humorous thinking portrait. Do not add a hand near his face, do not move the head, no new props. Keep same real man."
  },
  {
    "key": "experimentuji",
    "expression": "RÁD EXPERIMENTUJI — delighted, visibly SURPRISED discovery. Both eyebrows lifted high with natural forehead creases, eyes noticeably widened (realistic, not cartoon), mouth open in a small rounded 'oh!' shape, as if an experiment produced an unexpected result. This must be clearly different from laughter and from the thinking variant. No head or body movement; same real recognizable man."
  }
]

