<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[[*pagetitle]] - [[++site_name]]</title>
    <meta name="description" content="[[*description:default=`Качественное лечение в Беларуси по доступным ценам`]]">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'display': ['Inter', 'system-ui', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body { font-family: 'Inter', system-ui, sans-serif; }
    </style>
</head>
<body class="min-h-screen bg-white">
    <?php include 'templates/header.php'; ?>

    <?php include 'templates/hero-section.php'; ?>

    <?php include 'templates/services-section.php'; ?>

    <?php include 'templates/how-we-help-section.php'; ?>

    <?php include 'templates/our-services-section.php'; ?>

    <?php include 'templates/stats-section.php'; ?>

    <?php include 'templates/testimonials-section.php'; ?>

    <?php include 'templates/footer.php'; ?>

    <?php include 'templates/modals.php'; ?>

    <script>
        function openModal(modalId) {
            document.getElementById(modalId).classList.remove('hidden');
        }

        function closeModal(modalId) {
            document.getElementById(modalId).classList.add('hidden');
        }

        window.onclick = function(event) {
            if (event.target.classList.contains('modal-overlay')) {
                event.target.classList.add('hidden');
            }
        }
    </script>
</body>
</html>
