import { getStravaData } from "@/lib/strava";
import type { StravaSport } from "@/lib/strava";

const SPORT_EMOJI: Record<string, string> = {
  Run: "🏃",
  WeightTraining: "🏋️",
  Workout: "💪",
  Walk: "🚶",
  Golf: "⛳",
  Swim: "🏊",
  Pilates: "🧘",
  Badminton: "🏸",
  Yoga: "🌿",
  Hike: "🥾",
  Ride: "🚴",
  RockClimbing: "🧗",
  Kayaking: "🛶",
  HighIntensityIntervalTraining: "🔥",
};

const SPORT_LABEL: Record<string, string> = {
  WeightTraining: "Weights",
  HighIntensityIntervalTraining: "HIIT",
  RockClimbing: "Climbing",
};

function formatHours(seconds: number): string {
  return Math.round(seconds / 3600).toLocaleString();
}

function SportTile({ sport }: { sport: StravaSport }) {
  const label = SPORT_LABEL[sport.sport_type] ?? sport.sport_type;
  const emoji = SPORT_EMOJI[sport.sport_type] ?? "🏅";

  return (
    <div className="p-5 bg-white dark:bg-neutral-950 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-150 border-b border-r border-neutral-200 dark:border-neutral-800">
      <p className="text-2xl mb-3">{emoji}</p>
      <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">{label}</p>
      <p className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
        {sport.activities}
      </p>
      <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">sessions</p>
      {sport.distance_km > 0 && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
          {sport.distance_km.toLocaleString(undefined, { maximumFractionDigits: 0 })} km
        </p>
      )}
    </div>
  );
}

export default function FitnessPage() {
  const data = getStravaData();

  const topStats = [
    {
      label: "Activities",
      value: data.total_activities.toLocaleString(),
    },
    {
      label: "KM Covered",
      value: Math.round(data.total_distance_km).toLocaleString(),
    },
    {
      label: "Hours Active",
      value: formatHours(data.total_moving_time_s),
    },
    {
      label: "Elevation (m)",
      value: Math.round(data.total_elevation_gain_m).toLocaleString(),
    },
  ];

  const since = new Date(data.first_activity_date).getFullYear();
  const lastActive = new Date(data.latest_activity_date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="max-w-screen-xl mx-auto px-8 py-12">
      <p className="text-3xl font-medium tracking-widest uppercase text-neutral-400 mb-2">
        Fitness
      </p>
      <p className="text-sm text-neutral-400 mb-10">
        Synced from Strava · since {since} · last activity {lastActive}
      </p>

      {/* Top stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden mb-10">
        {topStats.map((stat) => (
          <div
            key={stat.label}
            className="p-6 bg-white dark:bg-neutral-950 border-r border-b border-neutral-200 dark:border-neutral-800"
          >
            <p className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-1">
              {stat.value}
            </p>
            <p className="text-xs text-neutral-400 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Sport breakdown */}
      <p className="text-sm font-medium tracking-widest uppercase text-neutral-400 mb-4">
        By Sport
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
        {data.by_sport.map((sport) => (
          <SportTile key={sport.sport_type} sport={sport} />
        ))}
      </div>
    </div>
  );
}
