<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // Truncate
        \App\Models\Branch::truncate();
        // \App\Models\Branch::factory()->count(10)->create();

        // MAIN BRANCH
        // Units 500 & 501 L & S Bldg., 1414 Roxas Blvd. cor. Sta. Monica St., Ermita, Manila, Philippines
        //Telephone Nos. : (632) 523-7112; 523-4472
        // Fax No.: (632) 525-1198
        // email shaso2010@yahoo.com
        // Website:  www.shasointernational.com



        //
        //         CAGAYAN DE ORO BRANCH
        // Unit 2A, 2nd Floor, 52nd Business Center MIRDC Building Justo Gaerlan St., Cagayan De Oro City
        // Telefax: 088-850-0039
        // Email address: shasocagayan2014@gmail.com

        //

//         DAVAO BRANCH
    // 2ND FLOOR, DOOR 2, BLUE BLDG., RIZAL EXTENSION, DAVAO CITY
    // Telefax: 082-222-1612
    // Email address: shaso.davao@gmail.com


        $branchs = [
            [
                'name' => 'Main Branch',
                'address' => 'Units 500 & 501 L & S Bldg., 1414 Roxas Blvd. cor. Sta. Monica St., Ermita, Manila, Philippines',
                'phone' => ['(632) 523-7112', '(632) 523-4472'],
                'email' => ['
                shaso.applicant@gmail.com
            '],
                'website' => '/',
            ],
            [
                'name' => 'Cagayan De Oro Branch',
                'address' => 'Unit 2A, 2nd Floor, 52nd Business Center MIRDC Building Justo Gaerlan St., Cagayan De Oro City',
                'phone' => ['(088) 850-0039'],
                'email' => ['shasocagayan2014@gmail.com'],
                'website' => '/',
            ],
            [
                'name' => 'Davao Branch',
                'address' => '2ND FLOOR, DOOR 2, BLUE BLDG., RIZAL EXTENSION, DAVAO CITY',
                'phone' => ['(082) 222-1612'],
                'email' => ['shaso.davao@gmailcom'],
                'website' => '/',
            ]
        ];
       foreach ($branchs as $key => $branch) {
           \App\Models\Branch::create($branch);
       }
    }
}
