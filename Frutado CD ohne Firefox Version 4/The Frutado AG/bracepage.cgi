#!/usr/bin/perl

# document to redirect to the brace pages of navigator in order to
# record their invocations at standard places in the server
# log.

# URL parameters to this document are name, href.
# - value of name is start, stop, or error.
# - value of href is the URL to redirect to.

# URL parameters used by this script are subtracted from the URL
# parameter set, all other parameters are passed on to target.

sub url_append {
  my ($url, $p) = @_;
  if ($p !~ /^$/) {
    if ($url =~ /\?/) {
      return "$url&$p";
    } else {
      return "$url?$p";
    }
  } else {
    return $url;
  }
}

sub url_escape {
  my ($url) = @_;
  $url =~ s-([&=: /?])-sprintf("%%%02x", ord($1))-geo;
  return $url;
}

# Workaround for Mac explorer that confuses Location and
# Content-Location headers in redirect respones, using the latter
# valus instead of the former for the redirection target.

my $q = '';
if ($ENV{'QUERY_STRING'}) {
  $q = $ENV{'QUERY_STRING'};

} elsif ($ENV{'HTTP_REFERER'} =~ m=^[^\?]*\?(.*)$=) {
  $q = $1;
}

my @p = split(/&+/, $q);
foreach (@p) {
  my($k,$v) = split /=/;
  $v =~ tr/+/ /;
  $v =~ s/%([a-fA-F0-9]{2})/pack("C", hex($1))/geo;
  $param{$k} = $v;
}

if (defined $param{'href'} && $param{'href'}) {
  my $url = $param{'href'};
  my $type = $param{'type'} || 'http';
  delete $param{'href'};
  delete $param{'name'};
  delete $param{'type'};
  $url = &url_append($url, join("&", map { 
    "$_=" . &url_escape($param{$_})
  } sort keys %param));

  if ($type eq 'jsassign') {
    print "Content-type: text/html\n\n";
    print qq[<html><body onload="document.location.href = '$url'">\n];

  } elsif ($type eq 'jsreplace') {
    print "Content-type: text/html\n\n";
    print qq[<html><body onload="document.location.replace('$url')">\n];

  } elsif ($type eq 'html') {
    print "Content-type: text/html\n\n";
    print qq[<html><head><meta http-equiv="refresh" content="0;URL=$url">\n];

  } else {
    print "Status: 302\n";
    print "Location: $url\n\n";
  }

} else {
  my $name = $param{'name'};
  if ($name eq 'start') {
    print "Content-type: text/html\n\n";
    print "start.";

  } elsif ($name eq 'stop') {
    print "Content-type: text/html\n\n";
    print "stop.";

  } elsif ($name eq 'error') {
    print "Content-type: text/html\n\n";
    print "error.<br>code: $param{'code'}";
    print "<br>context: $param{'context'}\n";

  } else {
    print "Status: 400\n";
    print "Content-type: text/plain\n\n";
    print "Missing URL parameter: 'name'\n";
  }
}
