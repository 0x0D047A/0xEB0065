cd '.\output'

Get-ChildItem -Filter *.md |
ForEach-Object {
    $in = $_.FullName
    $out = '.\epub\' + $_.BaseName + '.epub'

    pandoc -s $in -o $out
}

cd ..