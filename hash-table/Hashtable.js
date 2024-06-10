class Hashtable {
    constructor(size = 1024) {
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }

    hash(key) {
        return key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (const [k, v] of bucket) {
            if (k === key) {
                return v;
            }
        }

        throw new Error(`KeyError: ${key} not found in hashtable.`);
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (const [k, v] of bucket) {
            if (k === key) {
                return true;
            }
        }

        return false;
    }

    keys() {
        const keysArray = [];
        for (const bucket of this.buckets) {
            for (const [k, v] of bucket) {
                keysArray.push(k);
            }
        }
        return keysArray;
    }
}

module.exports = Hashtable;
