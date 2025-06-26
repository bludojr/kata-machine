export default function bs_list(haystack: number[], needle: number): boolean {
    let lo: number = 0;
    let hi: number = haystack.length;

    while (lo < hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const value = haystack[mid];

        if (needle === value) {
            return true
        } else if (needle > value) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return false;
}