## Problem Statement
You are given a sorted array a1,a2,...,an (for each index i > 1 condition ai ≥ ai−1 holds) and an integer k. You are asked to divide this array into k non-empty consecutive subarrays. Every element in the array should be included in exactly one subarray.
Let max(i) be equal to the maximum in the i-th subarray, and min(i) be equal to the minimum in the i-th subarray. The cost of division is equal to i = 1k(max(i)^2 − min(i)^2)

Calculate the minimum cost you can obtain by dividing the array a into k non-empty consecutive subarrays.
### Installation

```bash
git clone https://github.com/yesitsmewhoelse/array_indexing_minimal_cost.git
npm install
npm run start
```


### Inputs

```bash
Array size
K value
Array elemts
```

Minimum Cost