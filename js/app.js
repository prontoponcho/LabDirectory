
(function() {
    var app = angular.module('laboratory', []);

    app.controller('LaboratoryController', function() {
        this.deptList = departments;
    });

    app.controller('DepartmentController', function(){

        this.tab = 1;

        this.isSelected = function(val) {
            return this.tab === val;
        };

        this.setTab = function(val) {
            this.tab = val;
        };
    });

    var departments = [
        {
            name: 'Chemistry',
            description: 'Tests blood, serum, and urine analytes',
            subDepartments: [
                {
                    name: 'Urinalysis',
                    testGroups: [],
                    tests: []
                },
                {
                    name: 'Chemistry',
                    testGroups: [
                        {
                            name: 'Basic Metabolic Panel',
                            abbreviation: 'BMP',
                            tests: [
                                {
                                    name: 'glucose'
                                },
                                {
                                    name: 'calcium'
                                },
                                {
                                    name: 'sodium'
                                },
                                {
                                    name: 'potassium'
                                },
                                {
                                    name: 'CO2'
                                },
                                {
                                    name: 'chloride'
                                },
                                {
                                    name: 'BUN'
                                },
                                {
                                    name: 'creatinine'
                                }
                            ]
                        },
                        {
                            name: 'Lipid Panel',
                            abbreviation: '',
                            tests: [
                                {
                                    name:  'total cholesterol'
                                },
                                {
                                    name: 'high-density lipo-protein cholesterol'
                                },
                                {
                                    name: 'low-density lipo-protein cholesterol'
                                },
                                {
                                    name: 'triglycerides'
                                }
                            ]
                        }
                    ],
                    tests: []
                }
            ]
        }
    ];

})();