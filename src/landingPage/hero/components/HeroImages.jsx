import hero1 from "/src/assets/hero1.png";
import hero2 from "/src/assets/hero2.png";
import hero3 from "/src/assets/hero3.png";

const images = [
  {
    text: "Create Notes",
    url: hero1,
    style: "-rotate-12",
  },
  {
    text: "Create Flashcards",
    url: hero2,
    style: "mt-6",
  },
  {
    text: "Schedule Flashcards",
    url: hero3,
    style: "rotate-12",
  },
];

export default function HeroImages() {
  return (
    <div className="medium:min-w-2xs medium:px-12 mx-auto mt-8 h-100 w-full min-w-md px-6 lg:max-w-12">
      <div className="grid auto-cols-max grid-flow-col justify-center gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transform transition-transform ${image.style}`}
          >
            <p className="medium:text-sm mb-2 w-full text-center text-xs font-semibold lg:text-base">
              {image.text}
            </p>
            <div className="medium:w-40 h-auto w-30 rounded-xl border border-slate-600 shadow-md shadow-slate-600 lg:w-50">
              <img
                src={image.url}
                alt={image.text}
                className="overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
