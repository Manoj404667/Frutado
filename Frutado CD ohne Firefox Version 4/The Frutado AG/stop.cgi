#!/usr/bin/perl

$title = $ENV{QUERY_STRING};

print "Content-type: text/html\n\n";
print "<html><head><meta http-equiv='Content-Type' CONTENT='text/html; charset=utf-8'><title>$title</title></head>\n";
print qq'<body bgcolor="#336699" text="#ffffff" style="font:12px sans-serif">end of <br>$title</body>\n';
