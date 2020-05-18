<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHostingUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hosting_users', function (Blueprint $table) {
            $table->id();
            $table->enum('client_type', [1,2] )->nullable( false);
            $table->string( 'customer' )->nullable();
            $table->string( 'first_name' )->nullable(false );
            $table->string( 'last_name' )->nullable( false);
            $table->string( 'jmbg' )->nullable();
            $table->string( 'address' )->nullable();
            $table->string( 'location' )->nullable();
            $table->integer( 'zip_code')->nullable();
            $table->string( 'phone_number')->nullable();
            $table->string( 'mobile_number')->nullable();
            $table->string( 'email' )->nullable( false )->unique();
            $table->string( 'tax_id');
            $table->string( 'pib' );
            $table->enum( 'active', [1,2] )->nullable( false );
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hosting_users');
    }
}
