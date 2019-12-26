<?php
//==============================================================================
// Read POSTed AICC data and append it to daily aicc log file.
//==============================================================================

function write_log() {
    $uname = posix_uname();
    $logfileName = '/datango/log/aicc_test/' . strftime('%Y-%m-%d') . '.log';
    $logfileHandle = @fopen($logfileName, 'ab');

    if (!$logfileHandle) {
        return 'fopen('.$logfileName.',ab) failed.';
        // todo in PHP 4.2.0: . posix_strerr() . '.';
    }

    $log = "Error = 0\r\nerror_text = successful" .
           "\r\nversion= aicc_hacp_test.php 5.2.5\r\naicc_data = [core]\r\n" .
           "Lesson_location=hugo\r\n" .
           "student_Name=hugo\r\n" .
           "[student_DaTa]\r\n" .
           "hugo=willi\r\n" .
           "Mastery_SCORE=15\r\n" .
           "willi=hugo\r\n" .
           "[debug]\r\n" .
           $_SERVER['REMOTE_ADDR'] . ' has sent @' . strftime('%Y-%m-%d_%H:%M:%S') .
           "\r\nCommand:" . $_POST['command'] .
           "\r\nVersion:" . $_POST['version'] .
           "\r\nSid:" . $_POST['session_id'] .
           "\r\nData:" . $_POST['aicc_data'] .
           "\r\nEOD\r\n";

    $rc = @fwrite($logfileHandle, $log, strlen($log) /* turns escaping of '" off*/);
    $rc2 = @fclose($logfileHandle);

    if ($rc != strlen($log)) {
        return 'fwrite('.$logfileName.','.strlen($log).'Bytes) failed: '.$rc.'.';
    }

    if (!$rc2) {
        return 'fclose('.$logfileName.') failed: ' . $rc2 .
            ' (' . posix_strerror() . ').';
    }

    return $log;
}

// Main ========================================================================

$rc = true;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $rc = write_log();

    sleep(1);  // Simulate a busy LMS.

    header('Expires: Thu, 31 Mar 2005 05:02:03 GMT');
    header('Pragma: no-cache');
    header('Content-Type: text/plain');
    echo $rc;
    // echo '<body><p>' . $rc . '</p></body>';
}
else {
?>
<html><body>
</body></html>
<?php
}
// eof
?>
