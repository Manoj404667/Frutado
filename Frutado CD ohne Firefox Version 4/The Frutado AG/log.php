<?php
//==============================================================================
// Read POSTed logging data and append it to daily navigator log file.
// Needs POSTed variable 'log'.
// Alerts on error.
//==============================================================================

function write_log($log_) {
    if (strlen($log_) <= 0) {
        return 'Empty log passed';
    }

    $today = strftime('%Y-%m-%d');
    $now = strftime('%Y-%m-%d %H:%M:%S');
    $uname = posix_uname();
    $server = $uname['nodename'];
    $pos = strpos($server, '.');
    if ($pos !== false && $pos > 0)
        $server = substr($server, 0, $pos);
    $logfileName = '/datango/log/navigator/' . $today . '-' . $server . '.log';

    $logfileHandle = @fopen($logfileName, 'ab');

    if (!$logfileHandle) {
        return 'fopen('.$logfileName.',ab) failed.'; // todo in PHP 4.2.0: . posix_strerr() . '.';
    }

    $log = '<envelope ip="' . $_SERVER['REMOTE_ADDR'] . '" time="' . $now .
           '">' . "\r\n" . stripslashes($log_) . "</envelope>\r\n";

    $rc = @fwrite($logfileHandle, $log, strlen($log) /* turns escaping of '" off*/);
    $rc2 = @fclose($logfileHandle);

    if ($rc != strlen($log)) {
        return 'fwrite('.$logfileName.','.strlen($log).'Bytes) failed: '.$rc.'.';
    }

    if (!$rc2) {
        return 'fclose('.$logfileName.') failed: ' . $rc2 .
            ' (' . posix_strerror() . ').';
    }

    return true;
}

// Main ========================================================================

$rc = true;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $rc = write_log($_POST['log']);
}

include ('logphp.html');

// eof
?>
