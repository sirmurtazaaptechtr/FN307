<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
        <head>
            <title>My Menu</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
            <style>
                table tbody {
                    counter-reset: x;
                }
                table tbody tr td:first-child::before {
                    counter-increment: x;
                    content: counter(x);
                }
            </style>
        </head>
        <body>
            <h1>My Plants</h1>
            <table class="table table-bordered table-hover">
                <thead>
                    <tr class="table-dark">
                        <th>sr.no.</th>
                        <th>Common Name</th>
                        <th>Botanical Name</th>
                        <th>Zone</th>
                        <th>Light</th>
                        <th>Price</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    <xsl:for-each select="CATALOG/PLANT">
                        <tr>
                            <td>. </td>
                            <td><xsl:value-of select="COMMON" /></td>
                            <td><xsl:value-of select="BOTANICAL" /></td>
                            <td><xsl:value-of select="ZONE" /></td>
                            <td><xsl:value-of select="LIGHT" /></td>
                            <td><xsl:value-of select="PRICE" /></td>
                            <td><xsl:value-of select="AVAILABILITY" /></td>
                        </tr>
                    </xsl:for-each>
                </tbody>
            </table>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>