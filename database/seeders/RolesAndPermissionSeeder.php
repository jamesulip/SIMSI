<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //


        $roles =  [
            [
                'role' => 'admin',
                'permission' => [
                    'create_user',
                    'edit_user',
                    'delete_user',
                    'view_user',

                    'edit_job',
                    'delete_job',
                    'view_applicant',
                    'update_applicant_status',
                ]
            ],
            [
                'role' => 'user',
                'permission' => [
                    'edit_job',
                    'delete_job',
                    'view_applicant',
                    'update_applicant_status',
                ]
            ],

        ];

        foreach ($roles as $key => $role) {
            $nRole = Role::updateOrCreate(['name' => $role['role']]);
            foreach ($role['permission'] as $key => $permission) {
               Permission::updateOrCreate(['name' => $permission]);
                $nRole->givePermissionTo($permission);
            }
        }
    }
}
