angular.module('app').service('characterService', characterService);

characterService.$inject = [];

function characterService() {
    var counselors = [
        {
            id: "001_FEMALE_CAU",
            name: "Amy",
            //description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque felis ex, cursus a " + "turpis ac, laoreet sollicitudin ipsum. Cras hendrerit eget elit ut pretium. Proin vel diam consectetur, " + "pharetra magna et, placerat tellus. Donec dignissim tempus dolor, ac interdum dui sagittis in. In maximus " + "diam sed lacus mollis maximus. Nunc gravida varius lorem vitae bibendum. Nunc sit amet mattis ipsum, eu " + "pellentesque ex. Cras porta condimentum neque, nec mattis eros suscipit eu. Curabitur ac elementum sem. ",
            img: "unity/img/001_FEMALE_CAU.PNG",
            type: "virtualys",
            // path: "unity/sources/001_FEMALE_CAU_2017_11_22/",
            path: "unity/sources/001_FEMALE_CAU_2019_05_06/",
            scene: "scene_001_FEMALE_CAU",
            voiceIndex: 5
        }
    ];


    var selectedCounselor = counselors[0];
    var foundCounselor = false;

    var setUsersCounselor = function(index) {
        /*for(var i = 0; i < counselors.length; i++){
            if(charID == counselors[i].id){
                selectedCounselor = counselors[i];
                foundCounselor = true;
                // changeName(counselors[i].name);
                return 0;
            }
        }
        if(!foundCounselor){
            selectedCounselor = counselors[0];
            return 1;
        }*/

        selectedCounselor = counselors[index];
        return 0;
    };

    var getUsersCounselor = function (){
        if (selectedCounselor != null){
            return selectedCounselor;
        }
        else {
            return counselors[0];
        }
    };


    return {
        counselors: counselors,
        setUsersCounselor: setUsersCounselor,
        getUsersCounselor: getUsersCounselor
    };
}