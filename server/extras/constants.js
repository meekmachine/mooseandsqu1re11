/**
 * Created by ejhen on 8/10/2017.
 */

//bac is body weight vs number of Drinks
//note: the first row corresponds to the labels for the users weight, which start at 100lbs and increase by 20lbs increments
//note: the first column corresponds to the labels for avg num of drinks that user consumes, which starts at 1 and increases by 1
let maleBac = [
    [0, 100, 120, 140, 160, 180, 200, 220, 240],
    [1, .021, .015, .010, .007, .004, .002, .001, .000],
    [2, .058, .046, .036, .030, .024, .020, .018, .014],
    [3, .095, .077, .062, .053, .044, .038, .035, .029],
    [4, .132, .108, .088, .076, .064, .056, .052, .044],
    [5, .169, .139, .114, .099, .084, .074, .069, .059],
    [6, .206, .170, .140, .122, .104, .092, .086, .074],
    [7, .243, .201, .166, .145, .124, .110, .103, .089],
    [8, .280, .232, .192, .168, .144, .128, .120, .104],
    [9, .317, .263, .218, .191, .164, .146, .137, .119],
    [10, .354, .294, .244, .214, .184, .164, .154, .134],
    [11, .391, .325, .270, .237, .204, .182, .171, .149],
    [12, .428, .356, .296, .260, .224, .200, .188, .164]
];
let femaleBac = [
    [0, 100, 120, 140, 160, 180, 200, 220, 240],
    [1, .029, .021, .016, .012, .009, .006, .004, .002],
    [2, .074, .058, .048, .040, .034, .028, .024, .020],
    [3, .119, .095, .080, .068, .059, .050, .044, .038],
    [4, .164, .132, .112, .096, .084, .072, .064, .056],
    [5, .209, .169, .144, .124, .109, .094, .084, .074],
    [6, .253, .206, .176, .152, .134, .116, .104, .092],
    [7, .299, .243, .208, .180, .159, .138, .124, .110],
    [8, .344, .280, .240, .208, .184, .160, .144, .128],
    [9, .389, .317, .272, .236, .209, .182, .164, .146],
    [10, .434, .354, .304, .264, .234, .204, .184, .164],
    [11, .479, .391, .336, .292, .259, .226, .204, .182],
    [12, .524, .428, .368, .320, .284, .248, .224, .200]

];
let bacWeightIndex =  [0, 100, 120, 140, 160, 180, 200, 220, 240];
let bacAvgDrinkIndex =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//Note: maleDrinksPerWeekPercentile[0][x] is the labels that correspond to the number of drinks that the male consumes in a typical week
//example: maleDrinksPerWeekPercentile[0][2] = 3 therefore this male consumes between 1-3 drinks per week
//The top line corresponds to the number of drinks per week had by Males in the US, the  max value in the range was taken
//Note: column[0] is the labels that correspond to the age group in which that individual belong

let maleDrinksPerWeekPercentile = [
    [0, 1, 3, 5, 8, 12, 19, 29, 39, 40],
    [-1, .32, .65, .71, .76, .80, .84, .87, .90, .93, 1.00],
    [20, .20, .49, .59, .65, .73, .79, .85, .90, .93, 1.00],
    [25, .19, .53, .63, .71, .78, .84, .91, .94, .97, 1.00],
    [29, .21, .57, .68, .76, .82, .88, .93, .96, .97, 1.00],
    [34, .25, .57, .67, .73, .80, .86, .91, .95, .97, 1.00],
    [39, .26, .60, .68, .74, .80, .86, .91, .94, .95, 1.00],
    [44, .27, .59, .69, .75, .81, .86, .91, .94, .96, 1.00],
    [49, .28, .61, .70, .75, .81, .86, .92, .95, .96, 1.00],
    [54, .32, .65, .72, .78, .84, .89, .94, .97, .98, 1.00],
    [59, .36, .68, .74, .77, .83, .88, .93, .96, .97, 1.00],
    [64, .45, .73, .78, .82, .87, .91, .95, .98, .99, 1.00],
    [65, .29, .61, .69, .75, .81, .86, .91, .95, .96, 1.00]
];
//let drinkPercentileIndex = [0, 1, 3, 5, 8, 12, 19, 29, 39, 40];
//let agePercentileIndex = [0 , -1, 20, 25, 29, 34, 39, 44, 49, 54, 59, 64, 65];

//Note: femaleDrinksPerWeekPercentile[0][x] is the labels that correspond to the number of drinks that the female consumes in a typical week
//example: femaleDrinksPerWeekPercentile[0][2] = 3 therefore this male consumes between 1-3 drinks per week
//The top line corresponds to the number of drinks per week had by Females in the US, the  max value in the range was taken
//Note: column[0] is the labels that correspond to the age group in which that individual belong
let femaleDrinksPerWeekPercentile = [
    [0, 1, 3, 5, 8, 12, 19, 29, 39, 40],
    [-1, .40, .81, .86, .90, .92, .94, .96, .97, .98, 1.00],
    [20, .27, .72, .81, .85, .90, .93, .96, .98, .99, 1.00],
    [25, .30, .80, .88, .91, .94, .97, .98, .99, .99, 1.00],
    [29, .32, .80, .87, .92, .94, .97, .98, .99, .99, 1.00],
    [34, .32, .78, .86, .90, .93, .96, .98, .99, .99, 1.00],
    [39, .35, .80, .86, .91, .94, .96, .98, .99, 1.00, 1.00],
    [44, .36, .79, .86, .89, .93, .95, .97, .99, .99, 1.00],
    [49, .42, .82, .87, .90, .94, .96, .98, .99, .99, 1.00],
    [54, .43, .82, .88, .91, .93, .96, .98, .99, .99, 1.00],
    [59, .50, .85, .90, .93, .95, .98, .99, 1.00, 1.00, 1.00],
    [64, .63, .89, .92, .94, .96, .98, .99, 1.00, 1.00, 1.00],
    [65, .41, .81, .87, .91, .94, .96, .98, .99, .99, 1.00]
];


//Slunn002 added the following arrays
let recentInterpersonalFemale = [11, 13, 16, 21, 28, 33, 39, 45, 51, 56, 61, 67, 73, 77, 82, 84, 88, 91, 93, 95, 97, 98, 99, 99, 99, 99, 99, 99, 99, 99, 99];
let recentIntrapersonalFemale = [21, 37, 48, 57, 66, 73, 79, 84, 88, 92, 94, 96, 97, 98, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
let recentPhysicalFemale = [11, 17, 26, 36, 48, 58, 67, 75, 82, 86, 89, 93, 95, 97, 98, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
let recentSocialFemale = [39, 56, 69, 80, 86, 91, 94, 96, 97, 98, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
let lifeImpulseFemale = [2, 8, 19, 32, 49, 64, 77, 86, 93, 97, 99, 99];
let lifeInterpersonalFemale = [3, 6, 10, 18, 32, 47, 60, 72, 99, 99, 99];
let lifeIntrapersonalFemale = [2, 8, 21, 33, 47, 59, 71, 83, 93];
let lifePhysicalFemale = [2, 4, 9, 24, 41, 61, 77, 93, 99];
let lifeSocialFemale = [15, 33, 46, 62, 78, 90, 97, 99];
let recentImpulseMale = [17, 33, 47, 60, 72, 82, 88, 94, 96, 98, 98, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
let recentInterpersonalMale = [11, 14, 20, 28, 35, 44, 52, 59, 64, 70, 76, 81, 85, 88, 91, 93, 94, 95, 96, 97, 97, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
let recentIntrapersonalMale = [20, 35, 47, 58, 67, 78, 85, 90, 92, 94, 96, 97, 98, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
let recentPhysicalMale = [12, 22, 34, 45, 58, 68, 75, 82, 86, 90, 93, 95, 97, 98, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
let recentSocialMale = [39, 58, 71, 81, 88, 92, 95, 97, 98, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];
let lifeImpulseMale = [1, 5, 14, 27, 41, 58, 73, 82, 91, 96, 99, 99, 99];
let lifeInterpersonalMale = [3, 6, 10, 20, 36, 50, 66, 82, 99, 99, 99];
let lifeIntrapersonalMale = [3, 7, 18, 32, 47, 58, 71, 85, 94, 98, 99];


let bacTable = {
    "male": maleBac,
    "female": femaleBac
};
let bacTableIndices = {
    "weightIndex": bacWeightIndex,
    "avgDrinksIndex": bacAvgDrinkIndex
};

let lifeTotalMale = [1,1,1,1,1,1,2,3,4,6,7,9,12,15,19,21,25,29,33,36,41,45,49,54,58,62,66,70,72,76,79,82,85,88,91,93,
    95,96,97,98,99,99,99,99,99,99,99,99,99,99,99];
let lifeTotalFemale = [1,1,1,1,1,1,1,2,3,4,5,8,11,13,17,20,24,27,32,37,42,46,51,55,58,63,67,71,75,79,82,83,85,90,92,
    94,95,96,98,99,99,99,99,99,99,99,99,99,99,99,99];
let recentTotalMale = [7,8,10,10,12,14,16,18,24,26,28,30,34,38,41,44,48,50,53,55,57,60,63,65,67,70,72,74,75,78,80,81,82,
    83,84,86,87,88,89,90,90,91,92,92,93,94,95,95,95,96,97,97,97,97,98,98,98,98,98,99,99,99,99,99,99,99,99,99,99,99,99,
    99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,
    99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,
    99,99,99];
let recentTotalFemale = [8,10,11,11,13,14,15,18,19,21,22,24,26,29,31,33,37,40,43,45,48,50,54,54,57,59,64,65,67,68,71,72,
    74,75,77,79,81,82,84,85,86,87,88,88,89,91,91,93,93,94,94,95,96,96,96,97,97,98,98,98,98,98,99,99,99,99,99,99,99,99,
    99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,
    99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,
    99,99,99,99];
let recentImpulseFemale = [21,33,42,59,69,80,87,92,96,97,98,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,
    99,99,99,99,99,99];
let lifePhysicalMale = [1,4,14,29,47,65,79,93,99];
let lifeSocialMale = [16,31,45,62,77,90,97,99];

let drincPercentiles = {
    "LifeTotalMale": lifeTotalMale,
    "LifeTotalFemale": lifeTotalFemale,
    "RecentTotalMale": recentTotalMale,
    "RecentTotalFemale": recentTotalFemale,
    "RecentImpulseFemale": recentImpulseFemale,
    "RecentImpulseMale": recentImpulseMale,
    "LifeImpulseFemale": lifeImpulseFemale,
    "LifeImpulseMale": lifeImpulseMale,
    "RecentInterpersonalFemale":recentInterpersonalFemale,
    "RecentInterpersonalMale": recentInterpersonalMale,
    "LifeInterpersonalFemale": lifeInterpersonalFemale,
    "LifeInterpersonalMale": lifeInterpersonalMale,
    "RecentIntrapersonalFemale":recentIntrapersonalFemale,
    "RecentIntrapersonalMale": recentIntrapersonalMale,
    "LifeIntrapersonalFemale": lifeIntrapersonalFemale,
    "LifeIntrapersonalMale": lifeIntrapersonalMale,
    "RecentPhysicalFemale": recentPhysicalFemale,
    "RecentPhysicalMale": recentPhysicalMale,
    "LifePhysicalFemale": lifePhysicalFemale,
    "LifePhysicalMale": lifePhysicalMale,
    "RecentSocialFemale": recentSocialFemale,
    "RecentSocialMale": recentSocialMale,
    "LifeSocialFemale": lifeSocialFemale,
    "LifeSocialMale": lifeSocialMale
};


module.exports = {
    /*AUDIT_ID:'eG6W0AAAHY',*/
    AUDIT_ID: 'FS0pvWxhQI',//UPDATED FOR DCU_2017
    BDP_ID: 'ICwB0uKnDZ',
    /*BAC_ID: 'Jl7sIr2MvI',*/
    BAC_ID: 'fQikcFzbKI',//UPDATED FOR DCU_2017
    /*DRINC_ID: 'RstHDAqNip',*/
    DRINC_ID: 'hNm49zAIUG',//UPDATED FOR DCU_2017 THIS SURVEY IS KNOWN AS THE ALCOHOL RELATED PROBLEMS QUESTIONNAIRE IN THE DCU
    SADQC_ID_A: 'bc6prF86RM',
    SADQC_ID_B: 'rHhikyjunC',
    SADQC_ID_C: 'elPlhR9mUu',
    SOCRATES_ID: 'JawRpyEENc',
    BAC_ELEMENT_ID: '8E2eDh9Zy1',
    BAC_TABLE: bacTable,
    BAC_TABLE_INDICES: bacTableIndices,
    DEPRESSION_ID: 'lG0rPBAKvt', //UPDATED FOR DCU_2017,
    MAST_ID: 'LVoYoZjCkU',//UPDATED FOR DCU_2017
    AGEONSET_FAMILYHIS_ID: '1X46dxq8Il',//UPDATED FOR DCU_2017
    OTHER_DRUGS_ID: 'IJa6TTf4Gs',//updated for DCU_2017
    DEPENDENCE_ID: '58hEWYVyLc',//updated for DCU_2017
    DRINC_PERCENTILES: drincPercentiles,
    GOOD_THINGS_ID: 'Naz9y3FSdF', //updated for DCU_2017,
    NOTGOOD_THINGS_ID: 'ubFXFKSNEB', //updated for DCU_2017
    ALTERNATIVES: 'zmoHaOcIqa',
    MALE_DRINKSPERWEEK_PERCENTILE: maleDrinksPerWeekPercentile,
    FEMALE_DRINKSPERWEEK_PERCENTILE: femaleDrinksPerWeekPercentile
};

