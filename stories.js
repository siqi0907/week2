
//The number of the current story defines the three story titles and the content structure
const stories = [
    {
        title: "Handsome Man",
        output: function (words) {
            const {adjective, verb1, verb2, pluralNoun1, pluralNoun2, pluralNoun3} = words
            $("#storyTitle").text(this.title)
            $("#text").html(`
            I am a 
            <span class='p-xs-2'>${adjective}</span> man, I usually
             <span class='p-xs-2'>${verb1}</span>  and
             <span class='p-xs-2'>${verb2}</span>   my girlfriend.therefore i have many
             <span class='p-xs-2'>${pluralNoun1}</span>  and
             <span class='p-xs-2'>${pluralNoun2}</span> and
             <span class='p-xs-2'>${pluralNoun3}</span>`
                )
        }
    },
    {
        title: "Delicious foods",
        output: function (words) {
            const {adjective, verb1, verb2, pluralNoun1, pluralNoun2, pluralNoun3} = words
            $("#storyTitle").text(this.title)
            $("#text").html(`
            AHuang is a 
            <span class='p-xs-2'>${adjective}</span> cooker, he can
             <span class='p-xs-2'>${verb1}</span> 、
             <span class='p-xs-2'>${verb2}</span> , His representative delicacies are
             <span class='p-xs-2'>${pluralNoun1}</span>  and
             <span class='p-xs-2'>${pluralNoun2}</span> and
             <span class='p-xs-2'>${pluralNoun3}</span>`
                )
        }
    },
    {
        title: "Honor of Kings",
        output: function (words) {
            const {adjective, verb1, verb2, pluralNoun1, pluralNoun2, pluralNoun3} = words
            $("#storyTitle").text(this.title)
            $("#text").html(`
            Honor of Kings is a
            <span class='p-xs-2'>${adjective}</span> game, I usually
             <span class='p-xs-2'>${verb1}</span>  and
             <span class='p-xs-2'>${verb2}</span>  it,so i have
             <span class='p-xs-2'>${pluralNoun1}</span>  and
             <span class='p-xs-2'>${pluralNoun2}</span> and
             <span class='p-xs-2'>${pluralNoun3}</span>`
                )
        }
    }
]

//The serial number of the current story
let index;

//Keyword entered by the user
let words = {};

//Record the current story number and jump to the interface of the form
function IndexStory(res) {
    index = res
    $("#session1").hide()
    $("#session2").show("slow")
    $("#session2").fadeIn()

}


//Record user keywords and create stories
function createStory() {
    let status = true;
    const data = $('#form').serializeArray()
    $.each(data, function (index, a) {
        if(a.value == ''){
            status = false
        }
    })
    if(!status){
        return
    }
    $("#session2").hide()
    $("#session3").show("slow")
    $("#session3").fadeIn()
    $.each(data, function (index, a) {
        words[a.name] = a.value;
    })
    console.log(words)
    stories[index].output(words);
    return false
}

//Return to the story selection page
function createAnther(){
    $("#session3").hide()
    $("#session1").show("slow")
    $("#session1").fadeIn()
}
