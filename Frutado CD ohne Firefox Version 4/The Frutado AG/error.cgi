#!/usr/bin/perl

@mlang = ( 'de', 'en' );

$message{en}{_back} = "\
<br><br>Please use the back button of your browser \
to get back to the page you started this tour from \
or simply <a href='javascript:close()'>close</a> this window.";

$message{de}{_back} = "\
<br><br>Sie können den Zurück-Button ihres Browsers benutzen, \
um zur Ausgangsseite zurückzukehren oder auch \
das Browser-Fenster <a href='javascript:close()'>schliessen</a>.";

$message{en}{js} = "\
JavaScript needs to be enabled in order to play \
a tour. Please enable JavaScript in your browser.";

$message{de}{js} = "\
JavaScript wird benötigt, um eine Tour abspielen zu können. \
Bitte aktivieren Sie JavaScript in Ihrem Browser.";

$message{en}{_end} = "\
Tour playing has been interrupted by error. \
We are sorry for the inconvenience.";

$message{de}{_end} = "\
Das Abspielen der Tour wurde durch einen Fehler \
beendet. Wir bitten um Entschuldigung.";

$message{en}{_code} = "<br><br>Errorcode is: '";

$message{de}{_code} = "<br><br>Der Fehlercode ist: '";

$param = $ENV{'QUERY_STRING'};
%param = split(/[=&]/, $param);
foreach (keys %param) { # loop over all values in %param
  $param{$_} =~ tr/+/ /;
  $param{$_} =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
  $param{$_} =~ tr/\cM/\n/;
}

if (defined $param{'code'}) {
  $code = $param{'code'};
} else {
  $code = 'unknown';
}

if (defined $param{'context'}) {
  $context = $param{'context'};
} else {
  $context = '';
}

@lang = split(/,/, $ENV{'HTTP_ACCEPT_LANGUAGE'});
$lang = 'en';

lang: foreach $l (@lang) {
  foreach $ll (@mlang) {
    if ($l =~ /^$ll/) {
      $lang = $ll;
      last lang;
    }
  }
}

$message = $message{$lang}{$code};

if ($message == "") {
  $message = $message{$lang}{"_end"} .
    $message{$lang}{"_code"} . $code . "' " . $context;
}

$message = $message . $message{$lang}{"_back"};

print "Content-Type: text/html\n\n";
print <<EOF;
<html>
  <head>
  <meta http-equiv="Content-Type" CONTENT="text/html; charset=utf-8">
  <title>Tour</title>
  <link rel="stylesheet" type="text/css" href="error.css">
  </head>
  <body leftmargin="0" topmargin="0"
  marginwidth="0" marginheight="0">
  <div align="center">
  <table cellspacing=0 cellpadding=0>
  <tr>
  <td><img src="widgets/filler.gif" width="5" height="1"></td>
  <td>&nbsp;</td>
  </tr>
  <tr>
  <td><img src="widgets/filler.gif" width="15" height="1"></td>
  <td class="blue">
  <div align="left">$message</div>
  </td>
  </tr>
  </table>
  </div>
  </body>
  </html>

EOF
;

print "<!-- error code: $code; browser language: $lang -->\n";
foreach (sort keys %param) {
  print "<!-- $_: $param{$_} -->\n";
}
