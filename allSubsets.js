const get_bit = (num, bit) => {
    let temp = (1 << bit);
    temp = temp & num;
    if (temp === 0) {
        return 0;
    }

    return 1;
};

export function get_all_subsets(v, sets) {
    let subsets_count = Math.pow(2, v.length);
    for (let i = 0; i < subsets_count; i++) {
        let st = new Set([]);
        for (let j = 0; j < v.length; j++) {
            if (get_bit(i, j) === 1) {
                st.add(v[j]);
            }
        }
        console.log(...st)
        
        sets.push(st);
    }
};

// let v = ['a', 'b', 'c', 'd'];
// let subsets = [];

// get_all_subsets(v, subsets);