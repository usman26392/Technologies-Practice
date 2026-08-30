<!DOCTYPE html>
<html lang="en" class="">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <title>Sign up | Fashion </title>
        <?php include 'includes/meta.php'; ?>
    </head>

    <body class="no-home">

        <!-- Loader -->
        <?php include 'includes/loader.php';?>
        <!-- Header -->
        <?php include 'includes/header.php'; ?>

        <main>
          <section class="sign-up">
            <div class="container">
              <div class="sign-up__center">
                <h1 class="sign-up__title">Create An Account</h1>
                <p class="sign-up__subtitle">Create an account with us to enjoy all our services and perks!</p>
                <form class="sign-up__form" autocomplete="off">
                  <div class="sign-up__field">
                    <input type="email" id="signup-email" class="sign-up__input" name="email" required autocomplete="email" placeholder="Email Address" />
                  </div>
                  <div class="sign-up__field">
                    <input type="password" id="signup-password" class="sign-up__input" name="password" required autocomplete="new-password" placeholder="Password" />
                  </div>
                  <button type="submit" class="sign-up__btn">Create Account</button>
                </form>
              </div>
            </div>
          </section>
        </main>

        



        <!-- Footer -->
        <?php include 'includes/footer.php'; ?>
        <?php include 'includes/scripts.php'; ?>

    </body>

</html>