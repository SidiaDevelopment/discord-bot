export type PartialRecursive<T> = {
    [P in keyof T]?:
    T[P] extends (infer U)[] ? PartialRecursive<U>[] :
        T[P] extends object ? PartialRecursive<T[P]> :
            T[P];
};
