export type RequiredRecursive<T> = Required<{
    [P in keyof T]: T[P] extends object | undefined ? RequiredRecursive<Required<T[P]>> : T[P];
}>;
