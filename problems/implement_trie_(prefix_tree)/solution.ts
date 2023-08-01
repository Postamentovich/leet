
class InnerTrie {

    childrens: Record<string, InnerTrie> = {};
    isEndOfWord: boolean = false;

    constructor () {}
}

class Trie {
    root: InnerTrie;

    constructor() {
        this.root = new InnerTrie();
    }

    insert(word: string): void {
        const letters = word.split('');
        let root = this.root;

        for (let i = 0; i < letters.length; i++) {
            const letter = letters[i];
            if (root.childrens[letter]) {
                root = root.childrens[letter];
            } else {
                const newTrie = new InnerTrie();
                root.childrens[letter] = newTrie;
                root = newTrie;
            }
        }
        root.isEndOfWord = true;
    }

    search(word: string): boolean {
        const letters = word.split('');
        let root = this.root;

        for (const letter of letters) {
            if (root.childrens[letter]) {
                root = root.childrens[letter];
            } else {
                return false;
            }
        }

        return root.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
        const letters = prefix.split('');
        let root = this.root;

        for (const letter of letters) {
            if (root.childrens[letter]) {
                root = root.childrens[letter];
            } else {
                return false;
            }
        }

        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */