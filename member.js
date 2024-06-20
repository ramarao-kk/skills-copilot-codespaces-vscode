function skillsMember(name, skills) {
    return {
        name: name,
        skills: skills,
        introduce: function() {
            console.log(`Hi, my name is ${this.name} and my skills are ${this.skills.join(', ')}.`);
        }
    };
}

// Example usage:
const john = skillsMember('John', ['JavaScript', 'HTML', 'CSS']);
john.introduce(); // Output: Hi, my name is John and my skills are JavaScript, HTML, CSS.

const jane = skillsMember();
jane.name = 'Jane';
jane.skills = ['Python', 'Java', 'C++'];
jane.introduce(); // Output: Hi, my name is Jane and my skills are Python, Java, C++.