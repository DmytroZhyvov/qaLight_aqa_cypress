class Comment {
    constructor(text) {
        this.text = text
        this.likesQauntity = 0
    }

    addLike() {
        this.likesQauntity += 1
    }

    static mergeComments(firstComment, secondComment) {
        return `${firstComment}, ${secondComment}`
    }
}

const firstComment = new Comment('This is a first object comment');
const secondComment = new Comment('This is a second object comment');

console.log(firstComment);
console.log(firstComment.text);

console.log(`First comment likes qty: ${firstComment.likesQauntity}`);
console.log(`Second comment likes qty: ${secondComment.likesQauntity}`);
firstComment.addLike();
secondComment.addLike();
console.log(`First comment likes qty: ${firstComment.likesQauntity}`);
console.log(`Second comment likes qty: ${secondComment.likesQauntity}`);
secondComment.addLike();
console.log(`First comment likes qty: ${firstComment.likesQauntity}`);
console.log(`Second comment likes qty: ${secondComment.likesQauntity}`);

let mergeComments = Comment.mergeComments('commentA', 'commentB');
console.log(mergeComments);