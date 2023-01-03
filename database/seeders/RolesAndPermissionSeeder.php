<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

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

        $roles = [
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
                    'create_job',
                ],
            ],
            [
                'role' => 'user',
                'permission' => [
                    'edit_job',
                    'delete_job',
                    'view_applicant',
                    'update_applicant_status',
                ],
            ],

        ];

        foreach ($roles as $key => $role) {
            $nRole = Role::updateOrCreate(['name' => $role['role']]);
            foreach ($role['permission'] as $key => $permission) {
                Permission::updateOrCreate(['name' => $permission]);
            }
            $nRole->syncPermissions($role['permission']);
        }

        // create user for shasoadmin and shasouser
        $admin = \App\Models\User::updateOrCreate(
            ['email' => 'shasoadmin@shasomanpower.com'],
            [
                'name' => 'shasoadmin',
                'password' => bcrypt('L3jU4c6lsySV'),
            ]
        );
        $admin->assignRole('admin');
        $user = \App\Models\User::updateOrCreate(
            ['email' => 'shasouser@shasomanpower.com'],
            [
                'name' => 'shasouser',
                'password' => bcrypt('VSysl6c4Uj3L'),
            ]
        );
        $user->assignRole('user');
    }
}
