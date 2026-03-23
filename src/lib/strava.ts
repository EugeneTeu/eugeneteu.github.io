import data from '../content/strava/strava.json';


export interface StravaMetadata {
    total_activities:       number;
    total_distance_km:      number;
    total_moving_time_s:    number;
    total_elevation_gain_m: number;
    longest_distance_km:    number;
    longest_moving_time_s:  number;
    first_activity_date:    Date;
    latest_activity_date:   Date;
    by_sport:               StravaSport[];
}

export interface StravaSport {
    sport_type:          string;
    activities:          number;
    distance_km:         number;
    moving_time_s:       number;
    elevation_gain_m:    number;
    longest_distance_km: number;
}


export function getStravaData(): StravaMetadata {
    return data as unknown as StravaMetadata;
}