class Solution:
    def numDecodings(self, s: str) -> int:
        size = len(s)

        @cache
        def backtrack(i: int, cnt: int) -> int:
            if (i >= size):
                return 0
            # print(i, i + cnt, "=>", s[i:i+cnt])
            if (s[i] == "0") or (int(s[i:i+cnt]) > 26):
                return 0
            if (i + cnt == size):
                return 1

            return backtrack(i + cnt, 1) + backtrack(i + cnt, 2)

        return backtrack(0, 1) + backtrack(0, 2)
