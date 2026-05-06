import Image from "next/image";

type ScreenshotsDict = {
  title: string;
  ride_list: string;
  map: string;
  ride_view: string;
  my_rides: string;
  profile: string;
  chat: string;
};

const screenshots = [
  { src: "/screenshots/ride-list.jpeg", key: "ride_list" },
  { src: "/screenshots/map.jpeg", key: "map" },
  { src: "/screenshots/ride-view.jpeg", key: "ride_view" },
  { src: "/screenshots/my-rides.jpeg", key: "my_rides" },
  { src: "/screenshots/my-profile.jpeg", key: "profile" },
  { src: "/screenshots/chat.jpeg", key: "chat" },
] as const;

const Screenshots = ({ screenshots: dict }: { screenshots: ScreenshotsDict }) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          {dict.title}
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 px-6 max-w-6xl mx-auto scrollbar-hide snap-x snap-mandatory">
        {screenshots.map(({ src, key }) => (
          <div key={key} className="flex-none snap-center flex flex-col items-center gap-3">
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl shadow-black/40">
              <Image
                src={src}
                alt={dict[key]}
                width={230}
                height={498}
                className="block"
                quality={90}
              />
            </div>
            <span className="text-white/50 text-sm">{dict[key]}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Screenshots;
