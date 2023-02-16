<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class EmployerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $employers = [
        "principals/Picture17.jpg"=>'RIYADH K.S.A',
        "principals/Picture18.jpg"=>'AL INMA MEDICAL SERVICES RIYADH K.S.A',
        "principals/Picture19.jpg"=>'HALLIBURTON DAMMAM K.S.A',
        "principals/Picture20.jpg"=>'ALKHORAYEF INDUSTRIES RIYADH K.S.A',
        "principals/Picture21.jpg"=>'AL SAFWA FOOD COMPANY RIYADH K.S.A',
        "principals/Picture22.jpg"=>'DUNKIN DONUTS RIYADH K.S.A',
        "principals/Picture23.jpg"=>'TWO MOON LIGHT RECRUITING OFFICE RIYADH K.S.A',
        "principals/Picture24.jpg"=>'WALLAN TRADING CO. RIYADH K.S.A',
        "principals/Picture25.jpg"=>'MOHAWAREAN RAILWAY SERVICES CO. RIYADH K.S.A',
        "principals/Picture26.jpg"=>'THE PANCAKE HOUSE RIYADH K.S.A',
         "principals/Picture27.jpg"=>'BAZY TRADING & CONTRACTING CO. LTD RIYADH K.S.A',
         "principals/Picture28.jpg"=>'MISTER TAWUK TABUK K.S.A',
         "principals/Picture29.jpg"=>'PARADISE RESTAURANT GASIM K.S.A',
         "principals/Picture30.jpg"=>'SAUDI DNGO CONTRATING CO. RIYADH K.S.A',
       ];

        foreach ($employers as $key => $value) {
            $employer = new \App\Models\Employer();
            $employer->name = $value;
            $employer->country = 'Riyadh';
            $employer->address = '-';
            $employer->description = '-';
            $employer->email = '-';
            $employer->phone = '-';
            $employer->website = '/';

            $employer->save();
            $employer->addMedia(storage_path('app/public/'.$key))->preservingOriginal()
            ->toMediaCollection('logo');
        }
    }
}
