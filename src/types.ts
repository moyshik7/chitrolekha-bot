type Snowflake = string;
type Timestamp = number;

type RoleNames = "it" | "cultural" | "journalism" | "art" | "srijoni"

interface DatabaseBasicUserType {
    id: Snowflake;
    username: string;
    roles?: Array<RoleNames>;
    date?: Timestamp;
}

interface DatabaseFullUser extends DatabaseBasicUserType {
    name: string;
}